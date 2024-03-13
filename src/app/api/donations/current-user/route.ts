import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";

// This route retrieves donations by current user.
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

    // Step 2: Find donations.
    const donations = await prismaClient.donation.findMany({
        include: { fundraiser: true },
        where: { userId },
    });

    // Step 3: Return success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Successfully found donations",
        data: donations,
    });
}
