import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import CustomError from "@/app/interfaces/CustomError";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// This route gets a fundraiser by its unique ID.
export async function GET(
    _request: Request,
    { params }: { params: { slug: string } },
) {
    try {
        const { slug } = params;

        const fundraiser = await prismaClient.fundraiser.findUnique({
            include: { donations: { include: { user: true } } },
            where: { slug },
        });

        if (!fundraiser) {
            throw new CustomError(
                `No fundraiser found with slug ${params.slug}`,
                StatusCodes.NOT_FOUND,
            );
        }

        return Response.json(
            {
                success: true,
                message: "Fundraiser found",
                data: fundraiser,
            },
            {
                status: StatusCodes.OK,
            },
        );
    } catch (error: unknown) {
        if (error instanceof CustomError) {
            return Response.json(
                {
                    success: false,
                    message: error.message,
                },
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
