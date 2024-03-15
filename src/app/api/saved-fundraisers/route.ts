import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";

// This route gets the saved fundraisers using the user ID in session.
export async function GET() {
    try {
        // Step 1: Check user is in session and signed in.
        const session = await getIronSession<SessionData>(
            cookies(),
            sessionOptions,
        );

        const { userId } = session;

        if (!userId) {
            throw new CustomError(
                "You must be signed in to perform this action.",
                StatusCodes.UNAUTHORIZED,
            );
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
        return Response.json(
            {
                success: true,
                message: "Successfully retrieved saved fundraisers",
                data: savedFundraisers,
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
