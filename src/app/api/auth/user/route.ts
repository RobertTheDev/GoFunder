import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionCookie } from "@/app/api/configs/session";

export async function GET() {
    const session = await getIronSession(cookies(), sessionCookie);

    return Response.json({ data: session });
}
