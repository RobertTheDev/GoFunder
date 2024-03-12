import { GraphQLError } from "graphql";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionCookie } from "@/app/api/configs/auth/session";

import { createDonationSchema } from "./createDonation.schema";

export async function POST() {
    const session = await getIronSession<SessionData>(cookies(), sessionCookie);

    const { userId } = session;

    if (!userId) {
        return Response.json({ message: "No user signed in." });
    }

    const validation = await createDonationSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.donation.create({ data });
}
