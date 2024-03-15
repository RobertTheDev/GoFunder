import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import CustomError from "@/app/interfaces/CustomError";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// This route finds and returns a donation by its ID.
export async function GET(
    _request: Request,
    { params }: { params: { id: string } },
) {
    try {
        const donation = await prismaClient.donation.findUnique({
            where: { id: params.id },
        });

        if (!donation) {
            throw new CustomError(
                `No donation found with ID ${params.id}`,
                StatusCodes.NOT_FOUND,
            );
        }

        return Response.json(
            {
                success: true,
                message: `Successfully found donation with ID ${params.id}`,
                data: donation,
            },
            {
                status: StatusCodes.OK,
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
