import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { StatusCodes } from "http-status-codes";

// This route finds and returns a donation by its ID.
export async function GET(
    _request: Request,
    { params }: { params: { id: string } },
) {
    const donation = await prismaClient.donation.findUnique({
        where: { id: params.id },
    });

    if (!donation) {
        return Response.json({
            statusCode: StatusCodes.NOT_FOUND,
            messafe: `No donation found with ID ${params.id}`,
            data: null,
        });
    }

    return Response.json({
        statusCode: StatusCodes.OK,
        messafe: `Successfully found donation with ID ${params.id}`,
        data: donation,
    });
}
