import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { StatusCodes } from "http-status-codes";

// This route returns all fundraisers.
export async function GET() {
    const fundraisers = await prismaClient.fundraiser.findMany();

    return Response.json(
        {
            statusCode: StatusCodes.OK,
            message: "Fundraisers found",
            data: fundraisers,
        },
        {
            status: StatusCodes.OK,
        },
    );
}
