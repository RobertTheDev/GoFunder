import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { isTokenExpired } from "@/app/api/configs/token/tokenManagement";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { hashPassword } from "@/app/api/configs/auth/passwordManagement";
import CustomError from "@/app/interfaces/CustomError";
import { resetPasswordSchema } from "./resetPassword.schema";

// This route sends a password reset token to the user.
export async function PUT(
    request: Request,
    { params }: { params: { passwordResetToken: string } },
) {
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

        const validation = await resetPasswordSchema.safeParseAsync(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.issues[0].message,
                StatusCodes.BAD_REQUEST,
            );
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
            throw new CustomError(
                `No user found with token ${passwordResetToken}`,
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 4: Check user has no valid unexpired password reset token.
        // Throw an error if user has an unexpired password reset token.
        if (
            user.passwordResetTokenExpiry != null &&
            isTokenExpired(user.passwordResetTokenExpiry)
        ) {
            throw new CustomError(
                "Expired. Please request for a new password reset",
                StatusCodes.BAD_REQUEST,
            );
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
        return Response.json(
            {
                success: false,
                message: "Password reset successful.",
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
