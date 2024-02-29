import { Fundraiser } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';

export default async function getFundraisersByUserController(
    userId: string
): Promise<Fundraiser[]> {
    return prismaClient.fundraiser.findMany({ where: { userId } });
}
