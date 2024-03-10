import { Donation } from "@prisma/client";
import prismaClient from "@/app/api/db/prisma/prismaClient";

export default async function deleteDonationController(
    id: string,
): Promise<Donation> {
    return prismaClient.donation.delete({ where: { id } });
}
