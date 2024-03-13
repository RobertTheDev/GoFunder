import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { updateProfileSchema } from "./updateProfile.schema";

// This route updates a user's profile.
export async function PUT(request: Request) {
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

    // Step 2: Validate the request body.
    const body = await request.json();

    const validation = updateProfileSchema.safeParse(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.errors[0].code,
            message: validation.error.errors[0].message,
            data: null,
        });
    }
    const { data } = validation;

    // Step 3: Update the user and return success message.
    const updatedUser = await prismaClient.user.update({
        data,
        where: { id: userId },
    });

    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Profile update successful",
        data: updatedUser,
    });
}
