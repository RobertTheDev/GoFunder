import { Fundraiser, Prisma } from "@prisma/client";
import prismaClient from "@/app/api/db/prisma/prismaClient";

// This handler creates a fundraiser with an input into the database.
async function createFundraiser(
    data: Prisma.FundraiserCreateInput,
): Promise<Fundraiser> {
    return prismaClient.fundraiser.create({
        data,
    });
}

// This handler deletes a fundraiser using a unique field in the database.
async function deleteFundraiser(
    where: Prisma.FundraiserWhereUniqueInput,
): Promise<Fundraiser> {
    return prismaClient.fundraiser.delete({
        where,
    });
}

// This handlers finds a fundraiser using a unique field in the database.
async function findFundraiser(
    include: Prisma.FundraiserInclude,
    where: Prisma.FundraiserWhereUniqueInput,
): Promise<Fundraiser | null> {
    return prismaClient.fundraiser.findUnique({
        include,
        where,
    });
}

// This handlers finds and filters for fundraisers from the database.
async function findFundraisers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FundraiserWhereUniqueInput;
    where?: Prisma.FundraiserWhereInput;
    orderBy?: Prisma.FundraiserOrderByWithRelationInput;
}): Promise<Fundraiser[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return prismaClient.fundraiser.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
    });
}

// This handlers updates a fundraiser using a unique field and an input into the database.
async function updateFundraiser(params: {
    where: Prisma.FundraiserWhereUniqueInput;
    data: Prisma.FundraiserUpdateInput;
}): Promise<Fundraiser> {
    const { where, data } = params;
    return prismaClient.fundraiser.update({
        data,
        where,
    });
}

const fundraiserService = {
    createFundraiser,
    deleteFundraiser,
    findFundraiser,
    findFundraisers,
    updateFundraiser,
};

export default fundraiserService;
