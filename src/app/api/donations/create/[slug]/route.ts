import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { createDonationSchema } from "./createDonation.schema";

// This route allows a user to create a donation to a fundraiser.
export async function POST(
    request: Request,
    { params }: { params: { slug: string } },
) {
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

    const validation = await createDonationSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            message: validation.error.errors[0].message,
            data: null,
        });
    }

    const { data } = validation;

    // Step 3: Check fundraiser exists.
    const findFundraiser = await prismaClient.fundraiser.findUnique({
        where: {
            slug: params.slug,
        },
    });

    if (!findFundraiser) {
        return Response.json({
            statusCode: StatusCodes.BAD_REQUEST,
            message: `No fundraiser found with slug ${params.slug}`,
            data: null,
        });
    }

    // Step 4: Create donation.
    const createDonation = await prismaClient.donation.create({
        data: {
            ...data,
            fundraiserId: findFundraiser.id,
            userId,
        },
    });

    // Step 5: Return success message.
    return Response.json({
        statusCode: StatusCodes.CREATED,
        message: "Successfuly created donation",
        data: createDonation,
    });
}
