import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import sgMail from "../../configs/email/sendgrid";
import {
    generateTenMinuteTokenExpiry,
    generateToken,
    isTokenExpired,
} from "../../configs/token/tokenManagement";

// This route sends an email to verify a user's email.
export async function PUT() {
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

    // Step 2: Get the user with the requested email address.
    // Call the find user service handler to find user wih requested email address.
    const user = await prismaClient.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            email: true,
            emailVerified: true,
            emailVerificationToken: true,
            emailVerificationTokenExpiry: true,
        },
    });

    // Throw an error if no user is found with the requested email in the database.
    if (user == null) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: `No user found`,
            data: null,
        });
    }

    // Step 3: Check user's email is unverified.
    if (user.emailVerified) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: "Your email has already been verified",
            data: null,
        });
    }

    // Step 4: Check user has no valid unexpired password reset token.
    // Throw an error if user has an unexpired password reset token.
    if (
        user.emailVerificationTokenExpiry != null &&
        !isTokenExpired(user.emailVerificationTokenExpiry)
    ) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage:
                "You have just recently made a request for a password reset. Please try again in 10 minutes.",
            data: null,
        });
    }

    // Step 5: Update user with an email verification token.
    const emailVerificationToken = generateToken();
    const emailVerificationTokenExpiry = generateTenMinuteTokenExpiry();

    await prismaClient.user.update({
        data: {
            emailVerificationToken,
            emailVerificationTokenExpiry,
        },
        where: {
            id: userId,
        },
    });

    // Step 5: Send email verification email.
    await sgMail.send({
        to: "robertthedev@gmail.com",
        from: "robertthedev@gmail.com",
        subject: "Verify Email",
        text: `Your email verification token is ${emailVerificationToken}`,
        html: `Your email verification token is ${emailVerificationToken}`,
    });

    // Step 6: Return a success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        statusMessage: `Successfully sent email verification to ${user.email}.`,
        data: null,
    });
}
