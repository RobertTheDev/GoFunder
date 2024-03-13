import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { hashPassword } from "@/app/api/configs/auth/passwordManagement";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { signUpWithPasswordSchema } from "./signUpWithPassword.schema";

// Handler signs up a user with email and password.
export async function POST(request: Request) {
    // Step 1: Check no user signed into session.
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (userId) {
        return Response.json({ message: "You are already signed in" });
    }

    // Step 2: Validate request body.
    const body = await request.json();

    const validation = signUpWithPasswordSchema.safeParse(body);

    if (!validation.success) {
        const { message } = validation.error.errors[0];
        return Response.json({ message });
    }

    const { data } = validation;

    // Step 3: Hash password.
    const hashedPassword = await hashPassword({ password: data.password });

    // Step 4: Create user in database
    const user = await prismaClient.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hashedPassword,
        },
    });

    // Step 5: Save user ID into session.
    session.userId = user.id;

    await session.save();

    // Step 6: Return success message.
    return Response.json({ message: "Sign up successful" });
}
