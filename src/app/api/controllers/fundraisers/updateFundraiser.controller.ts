import { GraphQLError } from 'graphql';
import { Fundraiser } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';
import { updateFundraiserSchema } from '../../../validations/fundraiser/updateFundraiser.schema';

export default async function updateFundraiserController(
    input: unknown,
    id: string
): Promise<Fundraiser> {
    const validation = await updateFundraiserSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.fundraiser.update({ data, where: { id } });
}
