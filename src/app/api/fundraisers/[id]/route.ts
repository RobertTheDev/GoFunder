import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { StatusCodes } from "http-status-codes";

// This route gets a fundraiser by its unique ID.
export async function GET(
    _request: Request,
    { params }: { params: { id: string } },
) {
    const { id } = params;

    const fundraiser = await prismaClient.fundraiser.findUnique({
        include: { donations: { include: { user: true } } },
        where: { slug: id },
    });

    if (!fundraiser) {
        return Response.json({
            statusCode: StatusCodes.NOT_FOUND,
            message: `No fundraiser found with ID ${params.id}`,
            data: null,
        });
    }

    return Response.json({
        statusCode: StatusCodes.OK,
        message: "Fundraiser found",
        data: fundraiser,
    });
}
