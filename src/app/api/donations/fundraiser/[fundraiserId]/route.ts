import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { StatusCodes } from "http-status-codes";

// This route finds and returns donations by fundraiser ID.
export async function GET(
    _request: Request,
    { params }: { params: { fundraiserId: string } },
) {
    const donations = await prismaClient.donation.findMany({
        where: { fundraiserId: params.fundraiserId },
    });

    return Response.json({
        statusCode: StatusCodes.OK,
        messafe: `Successfully found donations with fundraiser ID ${params.fundraiserId}`,
        data: donations,
    });
}
