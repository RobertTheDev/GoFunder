import { GraphQLError } from 'graphql';
import { User } from '@prisma/client';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';
import { changeEmailSchema } from './changeEmail.schema';

export default async function changeEmailController(
    input: unknown
): Promise<User | null> {
    const id = '1';

    const validation = await changeEmailSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.user.update({ data, where: { id } });
}
