import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import {
    generateTenMinuteTokenExpiry,
    generateToken,
    isTokenExpired,
} from "@/app/api/configs/token/tokenManagement";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import sgMail from "@/app/api/configs/email/sendgrid";
import CustomError from "@/app/interfaces/CustomError";
import { sendPasswordResetSchema } from "./sendPasswordReset.schema";

// This route sends a password reset token to the user.
export async function POST(request: Request) {
    try {
        // Step 1: Check user is not signed in.
        const session = await getIronSession<SessionData>(
            cookies(),
            sessionOptions,
        );

        const { userId } = session;

        if (userId) {
            throw new CustomError(
                "You are already signed in",
                StatusCodes.UNAUTHORIZED,
            );
        }

        // Step 2: Validate the request body.
        const body = await request.json();

        const validation = await sendPasswordResetSchema.safeParseAsync(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.issues[0]?.message,
                StatusCodes.BAD_REQUEST,
            );
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
            throw new CustomError(
                `No user found with email ${data.email}.`,
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 4: Check user has no valid unexpired password reset token.
        // Throw an error if user has an unexpired password reset token.
        if (
            user.passwordResetTokenExpiry != null &&
            !isTokenExpired(user.passwordResetTokenExpiry)
        ) {
            throw new CustomError(
                "You have just recently made a request for a password reset. Please try again in 10 minutes.",

                StatusCodes.BAD_REQUEST,
            );
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

        // Step 6: Send password reset email.
        await sgMail.send({
            to: "robertthedev@gmail.com",
            from: "robertthedev@gmail.com",
            subject: "Password Reset",
            text: `Your password reset token is ${passwordResetToken}`,
            html: `Your password reset token is ${passwordResetToken}`,
        });

        // Step 7: Return a success message.
        return Response.json(
            {
                success: true,
                message: `Successfully sent password reset to ${data.email}.`,
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
