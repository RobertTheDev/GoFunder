import { GraphQLError } from 'graphql';
import { User } from '@prisma/client';
import { signUpSchema } from '@/app/lib/validations/auth/signUp.schema';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';

export default async function signUpController(
    input: unknown
): Promise<User | null> {
    const validation = await signUpSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.user.create({ data });
}
