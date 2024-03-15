import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { isTokenExpired } from "@/app/api/configs/token/tokenManagement";
import CustomError from "@/app/interfaces/CustomError";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// This route verifies a user's email using an email verifcation token.
export async function PUT(
    _request: Request,
    { params }: { params: { emailVerificationToken: string } },
) {
    try {
        // Step 1: Get the user with the email verification token.

        const user = await prismaClient.user.findFirst({
            where: {
                emailVerificationToken: params.emailVerificationToken,
            },
            select: {
                id: true,
                emailVerificationToken: true,
                emailVerificationTokenExpiry: true,
            },
        });

        if (user == null) {
            throw new CustomError(
                "No user found with the provided verification token",
                StatusCodes.NOT_FOUND,
            );
        }

        // Step 2: Check user has no valid unexpired password reset token.
        if (
            user.emailVerificationTokenExpiry != null &&
            isTokenExpired(user.emailVerificationTokenExpiry)
        ) {
            throw new CustomError(
                "Expired. Please request for a new password reset",
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 3: Update user with an email verification token.
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

        // Step 4: Return a success message.
        return Response.json(
            {
                success: true,
                statusMessage: "Email verification successful.",
                data: null,
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
