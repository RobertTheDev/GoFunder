import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionCookie } from "@/app/api/configs/auth/session";
import { saveFundraiserSchema } from "./saveFundraiser.schema";

export async function POST(request: Request) {
    const session = await getIronSession<SessionData>(cookies(), sessionCookie);

    const { userId } = session;

    if (!userId) {
        return Response.json({ message: "No user signed in." });
    }

    const body = await request.json();

    const validation = await saveFundraiserSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({ message: validation.error.errors[0].message });
    }

    const { data } = validation;

    const savedFundraiser = await prismaClient.savedFundraiser.create({ data });

    return Response.json({ data: savedFundraiser });
}
