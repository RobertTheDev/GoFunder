import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionCookie } from "@/app/api/lib/session";

export async function POST(request: Request) {
    const session = await getIronSession<SessionData>(cookies(), sessionCookie);

    session.email = "Alison@email.com";
    session.name = "Alison";

    await session.save();

    const res = await request.json();
    return Response.json({ res });
}
