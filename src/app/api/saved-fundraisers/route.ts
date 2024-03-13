import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";

// This handler gets the saved fundraisers using the user ID in session.
export async function GET() {
    // Step 1: Check user is in session and signed in.
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (!userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "You must be signed in to perform this action.",
            data: null,
        });
    }

    // Step 2: Find saved fundraisers using the user ID in session.
    const savedFundraisers = await prismaClient.savedFundraiser.findMany({
        include: {
            fundraiser: true,
        },
        where: {
            userId,
        },
    });

    // Step 3: Return the saved fundraisers data.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Successfully retrieved saved fundraisers",
        data: savedFundraisers,
    });
}
