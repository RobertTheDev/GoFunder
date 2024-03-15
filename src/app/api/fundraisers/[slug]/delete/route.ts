import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";

// This route deletes a fundraiser by its slug.
export async function DELETE(
    _request: Request,
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

        // Step 2: Check fundraiser exists.
        const fundraiser = await prismaClient.fundraiser.findUnique({
            where: {
                slug: params.slug,
            },
        });

        if (!fundraiser) {
            throw new CustomError(
                `No fundraiser found with slug ${params.slug}`,
                StatusCodes.NOT_FOUND,
            );
        }

        // Step 3: Check user is authorised.
        if (fundraiser.ownerId !== userId) {
            throw new CustomError(
                "You are not authorised to perform this action",
                StatusCodes.UNAUTHORIZED,
            );
        }

        // Step 4: delete fundraiser.
        const deleteFundraiser = await prismaClient.fundraiser.delete({
            where: { id: fundraiser.id },
        });

        // Step 5: Return success message.
        return Response.json(
            {
                success: true,
                message: "Fundraiser successfully deleted",
                data: deleteFundraiser,
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
