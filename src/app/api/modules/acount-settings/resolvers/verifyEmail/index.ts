import { User } from '@prisma/client';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';

export default async function verifyEmailController(): Promise<User | null> {
    const id = '1';

    return prismaClient.user.findUnique({ where: { id } });
}
