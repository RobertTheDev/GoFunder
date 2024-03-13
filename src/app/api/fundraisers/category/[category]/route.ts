import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export async function GET(
    _request: Request,
    { params }: { params: { category: string } },
) {
    const { category } = params;

    const fundraisers = await prismaClient.fundraiser.findMany({
        where: { category },
    });

    return Response.json({ data: fundraisers });
}
