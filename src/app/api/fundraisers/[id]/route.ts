import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export async function GET(
    request: Request,
    { params }: { params: { id: string } },
) {
    const { id } = params;

    const data = await prismaClient.fundraiser.findUnique({
        include: { donations: { include: { user: true } } },
        where: { slug: id },
    });

    return Response.json({
        data,
    });
}
