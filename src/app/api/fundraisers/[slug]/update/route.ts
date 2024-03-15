import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";
import { updateFundraiserSchema } from "./updateFundraiser.schema";

// This handler updates a fundraiser by its unique id.
export async function PUT(
    request: Request,
    { params }: { params: { slug: string } },
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

        const validation = await updateFundraiserSchema.safeParseAsync(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.errors[0].message,
                StatusCodes.BAD_REQUEST,
            );
        }

        const { data } = validation;

        // Step 3: Check fundraiser exists.
        const findFundraiser = await prismaClient.fundraiser.findUnique({
            where: {
                slug: params.slug,
            },
        });

        if (!findFundraiser) {
            throw new CustomError(
                `No fundraiser found with slug ${params.slug}`,
                StatusCodes.NOT_FOUND,
            );
        }

        // Step 4: Check user is authorised.
        if (findFundraiser.ownerId !== userId) {
            throw new CustomError(
                "You are not authorised to perform this action",
                StatusCodes.UNAUTHORIZED,
            );
        }

        // Step 5: Update donation.
        const updateFundraiser = await prismaClient.fundraiser.update({
            data,
            where: { slug: params.slug },
        });

        // Step 6: Return success message.
        return Response.json(
            {
                success: true,
                message: "Successfuly updated fundraiser",
                data: updateFundraiser,
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
