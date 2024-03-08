import { Fundraiser } from '@prisma/client';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';

export default async function getFundraiserController(
    slug: string
): Promise<Fundraiser | null> {
    return prismaClient.fundraiser.findUnique({
        include: { donations: { include: { user: true } } },
        where: { slug }
    });
}
