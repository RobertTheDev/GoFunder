import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export default async function getDonationsByUserController() {
    return prismaClient.donation.findMany({
        include: { fundraiser: true },
        where: { userId: "cltddzx6v0000l3jwegnt4ikb" },
    });
}
