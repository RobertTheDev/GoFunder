import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { saveFundraiserSchema } from "./saveFundraiser.schema";

// This handler creates and deletes a saved fundraiser with the user ID and fundraiser ID.
export async function POST(request: Request) {
    // Step 1: Check user is in session and signed in.
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (!userId) {
        return Response.json({ message: "No user signed in." });
    }

    // Step 2: Validate the request body.
    const body = await request.json();

    const validation = await saveFundraiserSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({ message: validation.error.errors[0].message });
    }

    const { data } = validation;

    // Step 3: Check the fundraiser exists with the fundraiser ID.
    const findFundraiser = await prismaClient.fundraiser.findUnique({
        where: {
            id: data.fundraiserId,
        },
    });

    if (!findFundraiser) {
        return Response.json({
            message: `No fundraiser exists with id ${data.fundraiserId}`,
        });
    }

    // Step 4: Check if user has saved the fundraiser.
    const findSavedFundraiser = await prismaClient.savedFundraiser.findFirst({
        where: {
            fundraiserId: data.fundraiserId,
            userId,
        },
    });

    // Step 5: If user has saved the fundraiser then delete a saved fundraiser.
    if (findSavedFundraiser) {
        await prismaClient.savedFundraiser.delete({
            where: {
                id: findSavedFundraiser.id,
            },
        });

        return Response.json({ message: "unsaved" });
    }

    // Step 6: If user has not saved the fundraiser then create a saved fundraiser.
    const savedFundraiser = await prismaClient.savedFundraiser.create({
        data: {
            fundraiserId: data.fundraiserId,
            userId,
        },
    });

    // Step 7: Return a success message .
    return Response.json({ data: savedFundraiser });
}
