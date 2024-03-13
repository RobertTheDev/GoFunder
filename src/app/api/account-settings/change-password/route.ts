import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { changePasswordSchema } from "./changePassword.schema";
import { verifyPassword } from "../../configs/auth/passwordManagement";

// This route changes a user's password.
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

    const validation = changePasswordSchema.safeParse(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.errors[0].code,
            message: validation.error.errors[0].message,
            data: null,
        });
    }

    const { data } = validation;

    // Step 3: Check user with email exists.
    const findUser = await prismaClient.user.findUnique({
        where: {
            id: userId,
        },
    });

    if (!findUser) {
        return Response.json({ message: "nooo" });
    }

    if (!findUser.password) {
        return Response.json({ message: "nooo" });
    }

    // Step 4: Check password is correct.
    const checkPassword = await verifyPassword({
        hashedPassword: findUser.password,
        password: data.currentPassword,
    });

    if (!checkPassword) {
        return Response.json({ message: "nooo" });
    }

    // Step 5: Update user with new password and return success message.
    const updatedUser = await prismaClient.user.update({
        data: {
            password: data.newPassword,
        },
        where: { id: userId },
    });

    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Password change successful",
        data: updatedUser,
    });
}
