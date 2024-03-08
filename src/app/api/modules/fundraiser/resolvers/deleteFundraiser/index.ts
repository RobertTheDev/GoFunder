import { Fundraiser } from '@prisma/client';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';

export default async function deleteFundraiserController(
    id: string
): Promise<Fundraiser> {
    return prismaClient.fundraiser.delete({ where: { id } });
}
