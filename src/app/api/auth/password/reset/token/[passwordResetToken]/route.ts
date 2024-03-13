import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { isTokenExpired } from "@/app/api/configs/token/tokenManagement";
import { StatusCodes } from "http-status-codes";
import { hashPassword } from "@/app/api/configs/auth/passwordManagement";
import { resetPasswordSchema } from "./resetPassword.schema";

// This route sends a password reset token to the user.
export async function PUT(
    request: Request,
    { params }: { params: { passwordResetToken: string } },
) {
    // Step 1: Check user is not signed in.
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "You are already signed in",
            data: null,
        });
    }

    // Step 2: Validate the request body.
    const body = await request.json();

    const validation = await resetPasswordSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.issues[0].code,
            statusMessage: validation.error.issues[0].message,
            data: null,
        });
    }

    const { data } = validation;

    // Step 3: Get the user with the requested email address.
    // Call the find user service handler to find user wih requested email address.
    const { passwordResetToken } = params;

    const user = await prismaClient.user.findFirst({
        where: {
            passwordResetToken,
        },
        select: {
            id: true,
            passwordResetToken: true,
            passwordResetTokenExpiry: true,
        },
    });

    // Throw an error if no user is found with the requested email in the database.
    if (user == null) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: `No user found with token ${passwordResetToken}`,
            data: null,
        });
    }

    // Step 4: Check user has no valid unexpired password reset token.
    // Throw an error if user has an unexpired password reset token.
    if (
        user.passwordResetTokenExpiry != null &&
        isTokenExpired(user.passwordResetTokenExpiry)
    ) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: "Expired. Please request for a new password reset",
            data: null,
        });
    }

    // Step 5: Update user with a password reset token.
    const hashedPassword = await hashPassword({ password: data.password });

    await prismaClient.user.update({
        data: {
            password: hashedPassword,
            passwordResetToken: null,
            passwordResetTokenExpiry: null,
        },
        where: {
            id: user.id,
        },
    });

    // Step 6: Return a success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        statusMessage: "Password reset successful.",
        data: null,
    });
}
