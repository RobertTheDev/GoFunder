import { User } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';

export default function getProfile(): Promise<User | null> {
    const id = '1';

    return prismaClient.user.findUnique({ where: { id } });
}
