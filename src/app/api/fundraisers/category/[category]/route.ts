import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import CustomError from "@/app/interfaces/CustomError";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// This handler finds and returns fundraisers with matching category.
export async function GET(
    _request: Request,
    { params }: { params: { category: string } },
) {
    try {
        const { category } = params;

        const fundraisers = await prismaClient.fundraiser.findMany({
            where: { category },
        });

        return Response.json(
            {
                success: true,
                message: `Fundraisers found with category ${category}`,
                data: fundraisers,
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
