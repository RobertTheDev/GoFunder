import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export default async function getOwnedFundraisersQuery() {
    return prismaClient.fundraiser.findMany({
        where: { ownerId: "cltddzx6v0000l3jwegnt4ikb" },
    });
}
