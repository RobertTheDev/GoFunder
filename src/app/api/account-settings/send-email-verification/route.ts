import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";
import sgMail from "@/app/api/configs/email/sendgrid";
import {
    generateTenMinuteTokenExpiry,
    generateToken,
    isTokenExpired,
} from "@/app/api/configs/token/tokenManagement";

// This route sends an email to verify a user's email.
export async function PUT() {
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
            throw new CustomError(`No user found`, StatusCodes.BAD_REQUEST);
        }

        // Step 3: Check user's email is unverified.
        if (user.emailVerified) {
            throw new CustomError(
                "Your email has already been verified",
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 4: Check user has no valid unexpired password reset token.
        // Throw an error if user has an unexpired password reset token.
        if (
            user.emailVerificationTokenExpiry != null &&
            !isTokenExpired(user.emailVerificationTokenExpiry)
        ) {
            throw new CustomError(
                "You have just recently made a request for a password reset. Please try again in 10 minutes.",
                StatusCodes.BAD_REQUEST,
            );
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
        return Response.json(
            {
                success: true,
                message: `Successfully sent email verification to ${user.email}.`,
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
