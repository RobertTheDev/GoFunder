import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { sendEmailVerficationSchema } from "./sendEmailVerification.schema";
import sgMail from "../../configs/email/sendgrid";
import {
    generateTenMinuteTokenExpiry,
    generateToken,
    isTokenExpired,
} from "../../configs/token/tokenManagement";

// This route sends an email to verify a user's email.
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

    // Step 2: Validate the request body
    const body = await request.json();

    const validation = sendEmailVerficationSchema.safeParse(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.errors[0].code,
            message: validation.error.errors[0].message,
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
            emailVerificationToken: true,
            emailVerificationTokenExpiry: true,
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
            email: data.email,
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
        statusMessage: `Successfully sent email verification to ${data.email}.`,
        data: null,
    });
}
