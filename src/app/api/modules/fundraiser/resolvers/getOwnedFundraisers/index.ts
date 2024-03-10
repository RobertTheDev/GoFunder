import prismaClient from "@/app/api/db/prisma/prismaClient";

export default async function getOwnedFundraisersQuery() {
    return prismaClient.fundraiser.findMany({
        where: { ownerId: "cltddzx6v0000l3jwegnt4ikb" },
    });
}
