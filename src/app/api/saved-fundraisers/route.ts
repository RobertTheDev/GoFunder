import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export default function getSavedFundraisersQuery() {
    return prismaClient.savedFundraiser.findMany({
        include: {
            fundraiser: true,
        },
    });
}
