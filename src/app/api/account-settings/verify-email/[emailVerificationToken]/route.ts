import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { isTokenExpired } from "@/app/api/configs/token/tokenManagement";
import { StatusCodes } from "http-status-codes";

// This route verifies a user's email using an email verifcation token.
export async function PUT(
    _request: Request,
    { params }: { params: { emailVerificationToken: string } },
) {
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
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            statusMessage: `No user found with the provided verification token`,
            data: null,
        });
    }

    // Step 2: Check user has no valid unexpired password reset token.
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
    return Response.json({
        statusCode: StatusCodes.OK,
        statusMessage: "Email verification successful.",
        data: null,
    });
}
