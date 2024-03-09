import { prismaClient } from '@/app/api/db/prisma/prismaClient';

export default function getSavedFundraisersQuery() {
    return prismaClient.savedFundraiser.findMany({
        include: {
            fundraiser: true
        }
    });
}
