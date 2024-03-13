import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";

export async function GET() {
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (!userId) {
        return Response.json({ message: "No user signed in." });
    }

    const profile = await prismaClient.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            createdAt: true,
            annonymous: true,
            defaultCurrency: true,
            email: true,
            emailVerified: true,
            image: true,
            name: true,
            totalCharitesOwned: true,
            totalDonationsAmount: true,
            totalDonationsMade: true,
            totalFundraisersOwned: true,
            username: true,
        },
    });

    return Response.json({ data: profile });
}
