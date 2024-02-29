import { SavedFundraiser, Prisma } from '@prisma/client';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';

// This handler creates a saved fundraiser with an input into the database.
export async function createSavedFundraiser(
    data: Prisma.SavedFundraiserCreateInput
): Promise<SavedFundraiser> {
    return prismaClient.savedFundraiser.create({
        data
    });
}

// This handler deletes a saved fundraiser using a unique field in the database.
export async function deleteSavedFundraiser(
    where: Prisma.SavedFundraiserWhereUniqueInput
): Promise<SavedFundraiser> {
    return prismaClient.savedFundraiser.delete({
        where
    });
}

// This handlers finds a saved fundraiser using a unique field in the database.
export async function findSavedFundraiser(
    SavedFundraiserWhereUniqueInput: Prisma.SavedFundraiserWhereUniqueInput
): Promise<SavedFundraiser | null> {
    return prismaClient.savedFundraiser.findUnique({
        where: SavedFundraiserWhereUniqueInput
    });
}

// This handlers finds and filters for saved fundraisers from the database.
export async function findSavedFundraisers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SavedFundraiserWhereUniqueInput;
    where?: Prisma.SavedFundraiserWhereInput;
    orderBy?: Prisma.SavedFundraiserOrderByWithRelationInput;
}): Promise<SavedFundraiser[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return prismaClient.savedFundraiser.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy
    });
}

// This handlers updates a saved fundraiser using a unique field and an input into the database.
export async function updateSavedFundraiser(params: {
    where: Prisma.SavedFundraiserWhereUniqueInput;
    data: Prisma.SavedFundraiserUpdateInput;
}): Promise<SavedFundraiser> {
    const { where, data } = params;
    return prismaClient.savedFundraiser.update({
        data,
        where
    });
}
