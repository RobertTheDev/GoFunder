import { SavedFundraiser } from '@prisma/client';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';

export default function getSavedFundraiserController(): Promise<
    SavedFundraiser[]
> {
    return prismaClient.savedFundraiser.findMany();
}
