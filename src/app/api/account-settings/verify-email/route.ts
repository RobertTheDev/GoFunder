import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { isTokenExpired } from "@/app/api/configs/token/tokenManagement";
import { StatusCodes } from "http-status-codes";
import { verfyEmailSchema } from "./verifyEmail.schema";

// This route verifies a user's email using an email verifcation token.
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

    const validation = await verfyEmailSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.errors[0].code,
            message: validation.error.errors[0].message,
            data: null,
        });
    }

    const { data } = validation;

    // Step 3: Get the user with the requested email address..
    const { emailVerificationToken } = data;

    const user = await prismaClient.user.findFirst({
        where: {
            emailVerificationToken,
        },
        select: {
            id: true,
            emailVerificationToken: true,
            emailVerificationTokenExpiry: true,
        },
    });

    if (user == null) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: `No user found with token ${emailVerificationToken}`,
            data: null,
        });
    }

    // Step 4: Check user has no valid unexpired password reset token.
    if (
        user.emailVerificationTokenExpiry != null &&
        isTokenExpired(user.emailVerificationTokenExpiry)
    ) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: "Expired. Please request for a new password reset",
            data: null,
        });
    }

    // Step 5: Update user with an email verification token.
    await prismaClient.user.update({
        data: {
            emailVerified: new Date(),
            emailVerificationToken: null,
            emailVerificationTokenExpiry: null,
        },
        where: {
            id: user.id,
        },
    });

    // Step 6: Return a success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        statusMessage: "Email verification successful.",
        data: null,
    });
}
