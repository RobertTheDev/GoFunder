import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";
import { updateDonationSchema } from "./updateDonation.schema";

// This route is used to update a donation by its unique ID.
export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
) {
    try {
        // Step 1: Check user is signed in.
        const session = await getIronSession<SessionData>(
            cookies(),
            sessionOptions,
        );

        const { userId } = session;

        if (!userId) {
            throw new CustomError(
                "You must be signed in to perform this action",
                StatusCodes.UNAUTHORIZED,
            );
        }

        // Step 2: Validate request body.
        const body = await request.json();

        const validation = await updateDonationSchema.safeParseAsync(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.errors[0].message,
                StatusCodes.BAD_REQUEST,
            );
        }

        const { data } = validation;

        // Step 3: Check donation exists.
        const findDonation = await prismaClient.donation.findUnique({
            where: {
                id: params.id,
            },
        });

        if (!findDonation) {
            throw new CustomError(
                `No donation found with ID ${params.id}`,
                StatusCodes.NOT_FOUND,
            );
        }

        // Step 4: Check user is authorised.
        if (findDonation.userId !== userId) {
            throw new CustomError(
                "You are not authorised to perform this action",
                StatusCodes.UNAUTHORIZED,
            );
        }

        // Step 5: Update donation.
        const updateDonation = await prismaClient.donation.update({
            data,
            where: { id: params.id },
        });

        // Step 6: Return success message.
        return Response.json(
            {
                success: true,
                message: "Successfuly updated donation",
                data: updateDonation,
            },
            {
                status: StatusCodes.OK,
            },
        );
    } catch (error: unknown) {
        if (error instanceof CustomError) {
            return Response.json(
                { success: false, message: error.message },
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
