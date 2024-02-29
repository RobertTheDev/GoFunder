import { Donation } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';

export default async function getDonationsByUserController(
    userId: string
): Promise<Donation[]> {
    return prismaClient.donation.findMany({ where: { userId } });
}
