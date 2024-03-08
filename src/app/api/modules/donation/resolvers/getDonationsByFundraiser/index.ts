import { Donation } from '@prisma/client';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';

export default async function getDonationsByFundraiserController(
    fundraiserId: string
): Promise<Donation[]> {
    return prismaClient.donation.findMany({ where: { fundraiserId } });
}