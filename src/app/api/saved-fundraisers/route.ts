import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionCookie } from "@/app/api/configs/auth/session";

export async function GET() {
    const session = await getIronSession<SessionData>(cookies(), sessionCookie);

    const { userId } = session;

    if (!userId) {
        return Response.json({ message: "No user signed in." });
    }

    const savedFundraisers = await prismaClient.savedFundraiser.findMany({
        include: {
            fundraiser: true,
        },
        where: {
            userId,
        },
    });

    return Response.json({ data: savedFundraisers });
}
