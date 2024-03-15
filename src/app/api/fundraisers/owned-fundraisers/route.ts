import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";

// Ths route returns fundraisers owned by the current user.
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

        // Step 2: Find owned fundraisers.
        const fundraisers = await prismaClient.fundraiser.findMany({
            where: { ownerId: userId },
        });

        // Step 3: Return success message.
        return Response.json(
            {
                message: "Fundraisers found",
                data: fundraisers,
            },
            {
                status: StatusCodes.OK,
            },
        );
    } catch (error: unknown) {
        if (error instanceof CustomError) {
            return Response.json(
                {
                    message: error.message,
                },
                { status: error.statusCode },
            );
        }

        return Response.json(
            {
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
            },
            {
                status: StatusCodes.INTERNAL_SERVER_ERROR,
            },
        );
    }
}
