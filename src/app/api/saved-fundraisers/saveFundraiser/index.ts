import { GraphQLError } from "graphql";
import { SavedFundraiser } from "@prisma/client";
import prismaClient from "@/app/api/db/prisma/prismaClient";
import { saveFundraiserSchema } from "./saveFundraiser.schema";

export default async function saveFundraiserMutation(
    input: unknown,
): Promise<SavedFundraiser | null> {
    const validation = await saveFundraiserSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.savedFundraiser.create({ data });
}
