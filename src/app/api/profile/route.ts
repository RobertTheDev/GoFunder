import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";

// This route retrieves a user's profile data from the database.
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

    // Step 2: Find and return the user's profile with a success message.
    const profile = await prismaClient.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            createdAt: true,
            annonymous: true,
            defaultCurrency: true,
            email: true,
            emailVerified: true,
            image: true,
            name: true,
            totalCharitesOwned: true,
            totalDonationsAmount: true,
            totalDonationsMade: true,
            totalFundraisersOwned: true,
            username: true,
        },
    });

    if (!profile) {
        return Response.json({
            statusCode: StatusCodes.NOT_FOUND,
            message: "No profile is found.",
            data: null,
        });
    }

    // Step 3: Return success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Successfully found profile.",
        data: profile,
    });
}
