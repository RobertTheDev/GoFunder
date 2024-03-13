import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { verifyPassword } from "@/app/api/configs/auth/passwordManagement";
import { changeEmailSchema } from "./changeEmail.schema";

// This route is used to change a user's email.
export async function PUT(request: Request): Promise<Response> {
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

    // Step 2: Validate the request body.
    const body = await request.json();

    const validation = changeEmailSchema.safeParse(body);

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
        return Response.json({
            statusCode: StatusCodes.NOT_FOUND,
            message: `No account found with email ${data.email}`,
            data: null,
        });
    }

    if (!findUser.password) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            message: "Your account does not have password set up",
            data: null,
        });
    }

    // Step 4: Check password is correct.
    const checkPassword = await verifyPassword({
        hashedPassword: findUser.password,
        password: data.password,
    });

    if (!checkPassword) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "Password entered is incorrect",
            data: null,
        });
    }

    // Step 5: Update user email and return success message.
    const updatedUser = await prismaClient.user.update({
        data,
        where: { id: userId },
    });

    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Email change successful",
        data: updatedUser,
    });
}
