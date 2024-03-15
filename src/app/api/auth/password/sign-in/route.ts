import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { verifyPassword } from "@/app/api/configs/auth/passwordManagement";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";
import { signInWithPasswordSchema } from "./signInWithPassword.schema";

// This route signs up a user with email and password.
export async function POST(request: Request) {
    try {
        // Step 1: Check no user signed into session.
        const session = await getIronSession<SessionData>(
            cookies(),
            sessionOptions,
        );

        const { userId } = session;

        if (userId) {
            throw new CustomError(
                "You are already signed in",
                StatusCodes.BAD_REQUEST,
            );
        }
        // Step 2: Validate request body.
        const body = await request.json();

        const validation = signInWithPasswordSchema.safeParse(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.errors[0].message,
                StatusCodes.BAD_REQUEST,
            );
        }

        const { data } = validation;

        // Step 3: Find user in database and check password is in use and correct.
        const user = await prismaClient.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if (!user) {
            throw new CustomError(
                "You are already signed in",
                StatusCodes.BAD_REQUEST,
            );
        }

        if (!user.password) {
            throw new CustomError(
                "You are not using email and password sign up",
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 4: Check password is correct.
        const checkPassword = await verifyPassword({
            hashedPassword: user.password,
            password: data.password,
        });

        if (!checkPassword) {
            throw new CustomError(
                "Password entered is incorrect",
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 5: Save user ID into session.
        session.userId = user.id;

        await session.save();

        // Step 6: Return success message.
        return Response.json(
            {
                success: true,
                message: "Sign in successful",
                data: user,
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
