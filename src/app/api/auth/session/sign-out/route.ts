import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";

// Handler checks and destroys an active session.
export async function DELETE() {
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (!userId) {
        return Response.json({ message: "You are not signed in" });
    }

    session.destroy();

    return Response.json({ data: "Sign out successful" });
}
