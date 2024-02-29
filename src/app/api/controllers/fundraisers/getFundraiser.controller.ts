import { Fundraiser } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';

export default async function getFundraiserController(
    id: string
): Promise<Fundraiser | null> {
    return prismaClient.fundraiser.findUnique({ where: { id } });
}
