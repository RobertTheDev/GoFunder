import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { StatusCodes } from "http-status-codes";

// This route deletes a donation by its id.
export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } },
) {
    // Step 1: Check user is signed in.
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (!userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "You must be signed in to perform this action",
            data: null,
        });
    }

    // Step 2: Check donation with ID exists.
    const findDonation = await prismaClient.donation.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!findDonation) {
        return Response.json({
            statusCode: StatusCodes.NOT_FOUND,
            message: `Donation with ID ${params.id} not found`,
            data: null,
        });
    }

    // Step 3: Check user is authorized to delete donation.
    if (findDonation.userId !== userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "You are not authorized to perform this action",
            data: null,
        });
    }

    // Step 4: Delete donation.
    const deleteFundraiser = await prismaClient.donation.delete({
        where: { id: params.id },
    });

    // Step 4: Return a success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Donation successfully deleted",
        data: deleteFundraiser,
    });
}
