import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import {
    generateTenMinuteTokenExpiry,
    generateToken,
    isTokenExpired,
} from "@/app/api/configs/token/tokenManagement";
import { StatusCodes } from "http-status-codes";
import sgMail from "@/app/api/configs/email/sendgrid";
import { sendPasswordResetSchema } from "./sendPasswordReset.schema";

// Handler sends a password reset token to the user.
export async function POST(request: Request) {
    // Step 1: Check user is not signed in.
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (userId) {
        return Response.json({ message: "You are already signed in" });
    }

    // Step 2: Validate the request body.
    const body = await request.json();

    const validation = await sendPasswordResetSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: validation.error.issues[0]?.message,
            data: null,
        });
    }

    const { data } = validation;

    // Step 3: Get the user with the requested email address.
    // Call the find user service handler to find user wih requested email address.
    const user = await prismaClient.user.findUnique({
        where: {
            email: data.email,
        },
        select: {
            passwordResetToken: true,
            passwordResetTokenExpiry: true,
        },
    });

    // Throw an error if no user is found with the requested email in the database.
    if (user == null) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: `No user found with email ${data.email}.`,
            data: null,
        });
    }

    // Step 4: Check user has no valid unexpired password reset token.
    // Throw an error if user has an unexpired password reset token.
    if (
        user.passwordResetTokenExpiry != null &&
        !isTokenExpired(user.passwordResetTokenExpiry)
    ) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage:
                "You have just recently made a request for a password reset. Please try again in 10 minutes.",
            data: null,
        });
    }

    // Step 5: Update user with a password reset token.
    const passwordResetToken = generateToken();
    const passwordResetTokenExpiry = generateTenMinuteTokenExpiry();

    await prismaClient.user.update({
        data: {
            passwordResetToken,
            passwordResetTokenExpiry,
        },
        where: {
            email: data.email,
        },
    });

    // Step 5: Send password reset email.
    await sgMail.send({
        to: "robertthedev@gmail.com",
        from: "robertthedev@gmail.com",
        subject: "Password Reset",
        text: `Your password reset token is ${passwordResetToken}`,
        html: `Your password reset token is ${passwordResetToken}`,
    });

    // Step 6: Return a success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        statusMessage: `Successfully sent password reset to ${data.email}.`,
        data: null,
    });
}
