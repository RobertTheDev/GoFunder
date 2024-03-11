import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionCookie } from "@/app/api/configs/auth/session";

export async function POST() {
    const session = await getIronSession<SessionData>(cookies(), sessionCookie);

    session.destroy();

    return Response.json({ data: "signed out" });
}
