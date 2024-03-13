import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";

// Ths route returns fundraisers owned by the current user.
export async function GET() {
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

    // Step 2: Find owned fundraisers.
    const fundraisers = await prismaClient.fundraiser.findMany({
        where: { ownerId: userId },
    });

    // Step 3: Return success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Fundraisers found",
        data: fundraisers,
    });
}
