import { GraphQLError } from "graphql";
import { Donation } from "@prisma/client";
import prismaClient from "@/app/api/db/prisma/prismaClient";
import { updateDonationSchema } from "./updateDonation.schema";

export default async function updateDonationController(
    input: unknown,
    id: string,
): Promise<Donation> {
    const validation = await updateDonationSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.donation.update({ data, where: { id } });
}
