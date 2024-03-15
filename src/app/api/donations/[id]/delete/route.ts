import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";

// This route deletes a donation by its id.
export async function DELETE(
    _request: Request,
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

        // Step 2: Check donation with ID exists.
        const findDonation = await prismaClient.donation.findUnique({
            where: {
                id: params.id,
            },
        });

        if (!findDonation) {
            throw new CustomError(
                `Donation with ID ${params.id} not found`,
                StatusCodes.NOT_FOUND,
            );
        }

        // Step 3: Check user is authorized to delete donation.
        if (findDonation.userId !== userId) {
            throw new CustomError(
                "You are not authorized to perform this action",
                StatusCodes.UNAUTHORIZED,
            );
        }

        // Step 4: Delete donation.
        const deleteFundraiser = await prismaClient.donation.delete({
            where: { id: params.id },
        });

        // Step 4: Return a success message.
        return Response.json(
            {
                success: true,
                message: "Donation successfully deleted",
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
