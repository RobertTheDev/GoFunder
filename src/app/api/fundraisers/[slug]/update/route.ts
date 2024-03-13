import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { updateFundraiserSchema } from "./updateFundraiser.schema";

// This handler updates a fundraiser by its unique id.
export async function PUT(
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

    const validation = await updateFundraiserSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.errors[0].code,
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
            statusCode: StatusCodes.NOT_FOUND,
            message: `No fundraiser found with slug ${params.slug}`,
            data: null,
        });
    }

    // Step 4: Check user is authorised.
    if (findFundraiser.ownerId !== userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: `You are not authorised to perform this action`,
            data: null,
        });
    }

    // Step 5: Update donation.
    const updateFundraiser = await prismaClient.fundraiser.update({
        data,
        where: { slug: params.slug },
    });

    // Step 6: Return success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Successfuly updated fundraiser",
        data: updateFundraiser,
    });
}
