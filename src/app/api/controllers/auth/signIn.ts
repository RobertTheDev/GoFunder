import { GraphQLError } from 'graphql';
import { User } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';
import { signInSchema } from '../../../lib/validations/auth/signIn.schema';

export default async function signInController(
    input: unknown
): Promise<User | null> {
    const validation = await signInSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.user.findUnique({
        where: { email: data.email }
    });
}
