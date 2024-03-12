import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionCookie } from "@/app/api/configs/auth/session";
import { verfyEmailSchema } from "./verifyEmail.schema";

export async function PUT(request: Request) {
    const session = await getIronSession<SessionData>(cookies(), sessionCookie);

    const { userId } = session;

    if (!userId) {
        return Response.json({ message: "No user signed in." });
    }

    const body = await request.json();

    const validation = verfyEmailSchema.safeParse(body);

    if (!validation.success) {
        const { message } = validation.error.errors[0];
        return Response.json({ message });
    }

    const { data } = validation;

    const updatedUser = await prismaClient.user.update({
        data,
        where: { id: userId },
    });

    return Response.json({ data: updatedUser });
}
