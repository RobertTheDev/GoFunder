import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { verifyPassword } from "@/app/api/configs/auth/passwordManagement";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { signInWithPasswordSchema } from "./signInWithPassword.schema";

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

    const validation = signInWithPasswordSchema.safeParse(body);

    if (!validation.success) {
        const { message } = validation.error.errors[0];
        return Response.json({ message });
    }

    const { data } = validation;

    // Step 3: Find user in database and check password is in use and correct.
    const user = await prismaClient.user.findUnique({
        where: {
            email: data.email,
        },
    });

    if (!user) {
        return Response.json({
            message: `User with email ${data.email} does not exist`,
        });
    }

    if (!user.password) {
        return Response.json({
            message: "You are not using email and password sign up",
        });
    }

    // Step 4: Check password is correct.
    const checkPassword = await verifyPassword({
        hashedPassword: user.password,
        password: data.password,
    });

    if (!checkPassword) {
        return Response.json({ message: "Password enetered is incorrect" });
    }

    // Step 5: Save user ID into session.
    session.userId = user.id;

    await session.save();

    // Step 6: Return success message.
    return Response.json({ message: "Sign in successful" });
}
