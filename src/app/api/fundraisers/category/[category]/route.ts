import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { StatusCodes } from "http-status-codes";

// This handler finds and returns fundraisers with matching category.
export async function GET(
    _request: Request,
    { params }: { params: { category: string } },
) {
    const { category } = params;

    const fundraisers = await prismaClient.fundraiser.findMany({
        where: { category },
    });

    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Fundraisers found",
        data: fundraisers,
    });
}
