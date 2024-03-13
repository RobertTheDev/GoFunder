import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { StatusCodes } from "http-status-codes";
import { updateDonationSchema } from "./updateDonation.schema";

// This route is used to update a donation by its unique ID.
export async function PUT(
    request: Request,
    { params }: { params: { id: string } },
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

    const validation = await updateDonationSchema.safeParseAsync(body);

    if (!validation.success) {
        return Response.json({
            statusCode: validation.error.errors[0].code,
            message: validation.error.errors[0].message,
            data: null,
        });
    }

    const { data } = validation;

    // Step 3: Check donation exists.
    const findDonation = await prismaClient.donation.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!findDonation) {
        return Response.json({
            statusCode: StatusCodes.NOT_FOUND,
            message: `No donation found with ID ${params.id}`,
            data: null,
        });
    }

    // Step 4: Check user is authorised.
    if (findDonation.userId !== userId) {
        return Response.json({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: `You are not authorised to perform this action`,
            data: null,
        });
    }

    // Step 5: Update donation.
    const updateDonation = await prismaClient.donation.update({
        data,
        where: { id: params.id },
    });

    // Step 6: Return success message.
    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Successfuly updated donation",
        data: updateDonation,
    });
}
