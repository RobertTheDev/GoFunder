import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import CustomError from "@/app/interfaces/CustomError";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

// This route returns all fundraisers.
export async function GET() {
    try {
        const fundraisers = await prismaClient.fundraiser.findMany();

        return Response.json(
            {
                success: true,
                message: "Fundraisers found",
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
