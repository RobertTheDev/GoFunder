import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export async function GET() {
    return prismaClient.fundraiser.findMany();
}
