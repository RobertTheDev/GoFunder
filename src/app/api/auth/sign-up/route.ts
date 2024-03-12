import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionCookie } from "@/app/api/configs/auth/session";
import { signUpSchema } from "./signUp.schema";
import signUp from "./signUp.service";

export async function POST(request: Request) {
    const session = await getIronSession<SessionData>(cookies(), sessionCookie);

    const { userId } = session;

    if (userId) {
        return Response.json({ message: "You are already signed in." });
    }

    const body = await request.json();

    const validation = signUpSchema.safeParse(body);

    if (!validation.success) {
        const { message } = validation.error.errors[0];
        return Response.json({ message });
    }

    const { data } = validation;

    const user = await signUp({ data });

    session.userId = user.id;

    await session.save();

    return Response.json({ data: user });
}
