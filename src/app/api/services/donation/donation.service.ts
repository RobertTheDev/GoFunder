import { Donation, Prisma } from '@prisma/client';
import { prismaClient } from '@/app/api/db/prisma/prismaClient';

// This handler creates a donation with an input into the database.
export async function createDonation(
    data: Prisma.DonationCreateInput
): Promise<Donation> {
    return prismaClient.donation.create({
        data
    });
}

// This handler deletes a donation using a unique field in the database.
export async function deleteDonation(
    where: Prisma.DonationWhereUniqueInput
): Promise<Donation> {
    return prismaClient.donation.delete({
        where
    });
}

// This handlers finds a donation using a unique field in the database.
export async function findDonation(
    DonationWhereUniqueInput: Prisma.DonationWhereUniqueInput
): Promise<Donation | null> {
    return prismaClient.donation.findUnique({
        where: DonationWhereUniqueInput
    });
}

// This handlers finds and filters for donations from the database.
export async function findDonations(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DonationWhereUniqueInput;
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithRelationInput;
}): Promise<Donation[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return prismaClient.donation.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy
    });
}

// This handlers updates a donation using a unique field and an input into the database.
export async function updateDonation(params: {
    where: Prisma.DonationWhereUniqueInput;
    data: Prisma.DonationUpdateInput;
}): Promise<Donation> {
    const { where, data } = params;
    return prismaClient.donation.update({
        data,
        where
    });
}
