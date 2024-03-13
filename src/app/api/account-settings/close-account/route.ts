import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { closeAccountSchema } from "./closeAccount.schema";

// This route deletes a a user's account.
export async function DELETE(request: Request) {
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

    const validation = closeAccountSchema.safeParse(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.errors[0].code,
            message: validation.error.errors[0].message,
            data: null,
        });
    }

    // Step 3: Delete the user.
    await prismaClient.user.delete({
        where: { id: userId },
    });

    // Step 4: Sign out the user.
    session.destroy();

    // Step 5: Return success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Account closure successful",
        data: null,
    });
}
