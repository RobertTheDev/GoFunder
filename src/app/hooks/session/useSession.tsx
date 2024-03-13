import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export default async function useSession() {
    const session = await getIronSession(cookies(), {
        password: process.env.SESSION_COOKIE_PASSWORD as string,
        cookieName: "gofunder-app-session",
    });

    return { session };
}
