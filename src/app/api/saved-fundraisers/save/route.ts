import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";
import { saveFundraiserSchema } from "./saveFundraiser.schema";

// This route creates and deletes a saved fundraiser with the user ID and fundraiser ID.
export async function POST(request: Request) {
    try {
        // Step 1: Check user is in session and signed in.
        const session = await getIronSession<SessionData>(
            cookies(),
            sessionOptions,
        );

        const { userId } = session;

        if (!userId) {
            throw new CustomError(
                "You must be signed in to perform this action.",
                StatusCodes.UNAUTHORIZED,
            );
        }

        // Step 2: Validate the request body.
        const body = await request.json();

        const validation = await saveFundraiserSchema.safeParseAsync(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.errors[0].message,
                StatusCodes.BAD_REQUEST,
            );
        }

        const { data } = validation;

        // Step 3: Check the fundraiser exists with the fundraiser ID.
        const findFundraiser = await prismaClient.fundraiser.findUnique({
            where: {
                id: data.fundraiserId,
            },
        });

        if (!findFundraiser) {
            throw new CustomError(
                `No fundraiser exists with id ${data.fundraiserId}`,

                StatusCodes.NOT_FOUND,
            );
        }

        // Step 4: Check if user has saved the fundraiser.
        const findSavedFundraiser =
            await prismaClient.savedFundraiser.findFirst({
                where: {
                    fundraiserId: data.fundraiserId,
                    userId,
                },
            });

        // Step 5: If user has saved the fundraiser then delete a saved fundraiser.
        if (findSavedFundraiser) {
            const deletedSavedFundraiser =
                await prismaClient.savedFundraiser.delete({
                    where: {
                        id: findSavedFundraiser.id,
                    },
                });

            return Response.json(
                {
                    success: true,
                    message: "Unsaved fundraiser",
                    data: deletedSavedFundraiser,
                },
                {
                    status: StatusCodes.OK,
                },
            );
        }

        // Step 6: If user has not saved the fundraiser then create a saved fundraiser.
        const savedFundraiser = await prismaClient.savedFundraiser.create({
            data: {
                fundraiserId: data.fundraiserId,
                userId,
            },
        });

        // Step 7: Return a success message .
        return Response.json(
            {
                success: true,
                message: "Saved fundraiser",
                data: savedFundraiser,
            },
            {
                status: StatusCodes.OK,
            },
        );
    } catch (error: unknown) {
        if (error instanceof CustomError) {
            return Response.json(
                {
                    success: false,
                    message: error.message,
                },
                { status: error.statusCode },
            );
        }

        return Response.json(
            {
                success: false,
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
            },
            {
                status: StatusCodes.INTERNAL_SERVER_ERROR,
            },
        );
    }
}
