import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export async function GET() {
    const fundraisers = await prismaClient.fundraiser.findMany();

    return Response.json({ data: fundraisers });
}
