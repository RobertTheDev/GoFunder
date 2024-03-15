import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOptions } from "@/app/api/configs/auth/session";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import CustomError from "@/app/interfaces/CustomError";
import { createDonationSchema } from "./createDonation.schema";

// This route allows a user to create a donation to a fundraiser.
export async function POST(
    request: Request,
    { params }: { params: { slug: string } },
) {
    try {
        // Step 1: Check user is signed in.
        const session = await getIronSession<SessionData>(
            cookies(),
            sessionOptions,
        );

        const { userId } = session;

        if (!userId) {
            throw new CustomError(
                "You must be signed in to perform this action",
                StatusCodes.UNAUTHORIZED,
            );
        }

        // Step 2: Validate request body.
        const body = await request.json();

        const validation = await createDonationSchema.safeParseAsync(body);

        if (!validation.success) {
            throw new CustomError(
                validation.error.errors[0].message,
                StatusCodes.BAD_REQUEST,
            );
        }

        const { data } = validation;

        // Step 3: Check fundraiser exists.
        const findFundraiser = await prismaClient.fundraiser.findUnique({
            where: {
                slug: params.slug,
            },
        });

        if (!findFundraiser) {
            throw new CustomError(
                `No fundraiser found with slug ${params.slug}`,

                StatusCodes.BAD_REQUEST,
            );
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
        return Response.json(
            {
                success: true,
                message: "Successfuly created donation",
                data: createDonation,
            },
            {
                status: StatusCodes.CREATED,
            },
        );
    } catch (error: unknown) {
        if (error instanceof CustomError) {
            return Response.json(
                { success: false, message: error.message },
                { status: error.statusCode },
            );
        }

        return Response.json(
            {
                success: false,
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
            },
            {
                status: StatusCodes.INTERNAL_SERVER_ERROR,
            },
        );
    }
}
