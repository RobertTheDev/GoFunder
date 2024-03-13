import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: string;
    email?: string;
    name?: string;
    isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
    isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_COOKIE_PASSWORD as string,
    cookieName: "gofunder-app-session",
    cookieOptions: {
        secure: false,
        // httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
    },
};
