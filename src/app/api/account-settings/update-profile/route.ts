import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";
import { updateProfileSchema } from "./updateProfile.schema";

// This route updates a user's profile.
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

        const validation = updateProfileSchema.safeParse(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.errors[0].message,
                StatusCodes.BAD_REQUEST,
            );
        }
        const { data } = validation;

        // Step 3: Update the user and return success message.
        const updatedUser = await prismaClient.user.update({
            data,
            where: { id: userId },
        });

        return Response.json(
            {
                success: true,
                message: "Profile update successful",
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
