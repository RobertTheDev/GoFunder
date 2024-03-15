import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import CustomError from "@/app/interfaces/CustomError";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// This route finds and returns donations by fundraiser ID.
export async function GET(
    _request: Request,
    { params }: { params: { fundraiserId: string } },
) {
    try {
        const donations = await prismaClient.donation.findMany({
            where: { fundraiserId: params.fundraiserId },
        });

        return Response.json(
            {
                success: true,
                message: `Successfully found donations with fundraiser ID ${params.fundraiserId}`,
                data: donations,
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
