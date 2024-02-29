import { GraphQLError } from 'graphql';
import { User } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';
import { verifyTotpCodeSchema } from '../../../validations/account-settings/verifyTotpCode.schema';

export default async function verifyTotpController(
    input: unknown
): Promise<User | null> {
    const id = '1';

    const validation = await verifyTotpCodeSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.user.update({ data, where: { id } });
}
