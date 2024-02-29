import { GraphQLError } from 'graphql';
import { User } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';
import { sendEmailVerficationSchema } from '../../../validations/account-settings/sendEmailVerification.schema';

export default async function sendEmailVerificationController(
    input: unknown
): Promise<User | null> {
    const id = '1';

    const validation = await sendEmailVerficationSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.user.update({ data, where: { id } });
}
