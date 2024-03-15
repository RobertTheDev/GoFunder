import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { verifyPassword } from "@/app/api/configs/auth/passwordManagement";
import CustomError from "@/app/interfaces/CustomError";
import { changeEmailSchema } from "./changeEmail.schema";

// This route is used to change a user's email.
export async function PUT(request: Request) {
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

        // Step 2: Validate the request body.
        const body = await request.json();

        const validation = changeEmailSchema.safeParse(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.errors[0].message,
                StatusCodes.BAD_REQUEST,
            );
        }

        const { data } = validation;

        // Step 3: Check user with email exists.
        const findUser = await prismaClient.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!findUser) {
            throw new CustomError(
                `No account found with email ${data.email}`,
                StatusCodes.NOT_FOUND,
            );
        }

        if (!findUser.password) {
            throw new CustomError(
                "Your account does not have password set up",
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 4: Check password is correct.
        const checkPassword = await verifyPassword({
            hashedPassword: findUser.password,
            password: data.password,
        });

        if (!checkPassword) {
            throw new CustomError(
                "Password entered is incorrect",
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 5: Update user email and return success message.
        const updatedUser = await prismaClient.user.update({
            data: {
                email: data.email,
                emailVerified: null,
            },
            where: { id: userId },
        });

        return Response.json(
            {
                success: true,
                message: "Email change successful",
                data: updatedUser,
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
