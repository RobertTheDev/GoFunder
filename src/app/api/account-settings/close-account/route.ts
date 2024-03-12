import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionCookie } from "@/app/api/configs/auth/session";
import { closeAccountSchema } from "./closeAccount.schema";

export async function DELETE(request: Request) {
    const session = await getIronSession<SessionData>(cookies(), sessionCookie);

    const { userId } = session;

    if (!userId) {
        return Response.json({ message: "No user signed in." });
    }

    const body = await request.json();

    const validation = closeAccountSchema.safeParse(body);

    if (!validation.success) {
        const { message } = validation.error.errors[0];
        return Response.json({ message });
    }

    const deletedUser = await prismaClient.user.delete({
        where: { id: userId },
    });

    return Response.json({ data: deletedUser });
}
