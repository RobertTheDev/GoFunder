import { GraphQLError } from "graphql";
import { Fundraiser } from "@prisma/client";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { createFundraiserSchema } from "./createFundraiser.schema";

export default async function createFundraiserController(
    input: unknown,
): Promise<Fundraiser> {
    const validation = await createFundraiserSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.fundraiser.create({ data: { ...data, ownerId: "2" } });
}