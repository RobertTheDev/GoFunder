import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { hashPassword } from "@/app/api/configs/auth/passwordManagement";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";
import { signUpWithPasswordSchema } from "./signUpWithPassword.schema";

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
                "You are are already signed in",
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 2: Validate request body.
        const body = await request.json();

        const validation = signUpWithPasswordSchema.safeParse(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.errors[0].message,
                StatusCodes.BAD_REQUEST,
            );
        }

        const { data } = validation;

        // Step 3: Check email is not in use.
        const isEmailInUser = await prismaClient.user.findUnique({
            where: {
                email: data.email,
            },
        });

        if (isEmailInUser) {
            throw new CustomError(
                `Email ${data.email} is already in use.`,
                StatusCodes.BAD_REQUEST,
            );
        }

        // Step 4: Hash password.
        const hashedPassword = await hashPassword({ password: data.password });

        // Step 5: Create user in database
        const user = await prismaClient.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: hashedPassword,
            },
        });

        // Step 6: Save user ID into session.
        session.userId = user.id;

        await session.save();

        // Step 7: Return success message.
        return Response.json(
            {
                success: true,
                message: "Sign up successful",
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
