import { Donation } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';

export default async function deleteDonationController(
    id: string
): Promise<Donation> {
    return prismaClient.donation.delete({ where: { id } });
}
