import { Donation } from "@prisma/client";
import { prismaClient } from "@/app/api/db/prisma/prismaClient";

export default async function getDonationController(
    id: string,
): Promise<Donation | null> {
    return prismaClient.donation.findUnique({ where: { id } });
}
