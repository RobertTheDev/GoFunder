import { GraphQLError } from 'graphql';
import { Donation } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';
import { createDonationSchema } from '../../../lib/validations/donation/createDonation.schema';

export default async function createDonationController(
    input: unknown
): Promise<Donation> {
    const validation = await createDonationSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.donation.create({ data });
}
