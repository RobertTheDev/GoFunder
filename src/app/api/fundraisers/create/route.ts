import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { createFundraiserSchema } from "./createFundraiser.schema";

// This route creates a fundraiser.
export async function POST(request: Request) {
    // Step 1: Check user is signed in.
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions,
    );

    const { userId } = session;

    if (!userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: "You must be signed in to perform this action",
            data: null,
        });
    }

    // Step 2: Validate request body.
    const body = await request.json();

    const validation = await createFundraiserSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.errors[0].code,
            message: validation.error.errors[0].message,
            data: null,
        });
    }

    const { data } = validation;

    // Step 3: create fundraiser.
    const createFundraiser = await prismaClient.fundraiser.create({
        data: {
            ...data,
            ownerId: userId,
        },
    });

    // Step 4: create fundraiser.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Successfuly created fundraiser",
        data: createFundraiser,
    });
}
