import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";

// This route retrieves donations by current user.
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

        // Step 2: Find donations.
        const donations = await prismaClient.donation.findMany({
            include: { fundraiser: true },
            where: { userId },
        });

        // Step 3: Return success message.
        return Response.json(
            {
                success: true,
                message: "Successfully found donations",
                data: donations,
            },
            {
                status: StatusCodes.OK,
            },
        );
    } catch (error: unknown) {
        if (error instanceof CustomError) {
            return Response.json(
                { success: false, message: error.message },
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
