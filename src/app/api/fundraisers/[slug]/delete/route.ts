import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { StatusCodes } from "http-status-codes";

// This route deletes a fundraiser by its slug.
export async function DELETE(
    _request: Request,
    { params }: { params: { slug: string } },
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

    // Step 2: Check fundraiser exists.
    const fundraiser = await prismaClient.fundraiser.findUnique({
        where: {
            slug: params.slug,
        },
    });

    if (!fundraiser) {
        return Response.json({
            statusCode: StatusCodes.NOT_FOUND,
            message: `No fundraiser found with slug ${params.slug}`,
            data: null,
        });
    }

    // Step 3: Check user is authorised.
    if (fundraiser.ownerId !== userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: `You are not authorised to perform this action`,
            data: null,
        });
    }

    // Step 4: delete fundraiser.
    const deleteFundraiser = await prismaClient.fundraiser.delete({
        where: { id: fundraiser.id },
    });

    // Step 5: Return success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Fundraiser successfully deleted",
        data: deleteFundraiser,
    });
}
