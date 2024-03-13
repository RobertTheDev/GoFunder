import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";

// This route signs out a user by destroying the active session.
export async function DELETE() {
    // Step 1: Check user is signed in.
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (!userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "You are not signed in",
            data: null,
        });
    }

    // Step 2: Destroy session.
    session.destroy();

    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Sign out successful",
        data: null,
    });
}
