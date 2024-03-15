import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";

// This route retrieves a user's profile data from the database.
export async function GET() {
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
            throw new CustomError(
                "No profile is found.",
                StatusCodes.NOT_FOUND,
            );
        }

        // Step 3: Return success message.
        return Response.json(
            {
                success: true,
                message: "Successfully found profile.",
                data: profile,
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
