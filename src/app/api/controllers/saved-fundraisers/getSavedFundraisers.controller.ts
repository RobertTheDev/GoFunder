import { SavedFundraiser } from '@prisma/client';
import { prismaClient } from '../../db/prisma/prismaClient';

export default function getSavedFundraiserController(): Promise<
    SavedFundraiser[]
> {
    return prismaClient.savedFundraiser.findMany();
}
