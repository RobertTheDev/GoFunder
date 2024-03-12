import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: string;
    email?: string;
    name?: string;
}

export const defaultSession: SessionData = {};

export const sessionCookie: SessionOptions = {
    password: process.env.SESSION_COOKIE_PASSWORD as string,
    cookieName: "gofunder-app-session",
    cookieOptions: {
        secure: false,
    },
};
