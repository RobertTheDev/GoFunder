import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export default async function getDonationsByFundraiserController() {
    return prismaClient.donation.findMany({
        include: { user: true },
        where: { fundraiserId: "cltdit65k0004b88hwrmehyjy" },
    });
}
