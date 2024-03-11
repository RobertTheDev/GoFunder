import { GraphQLError } from "graphql";
import { User } from "@prisma/client";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";
import { closeAccountSchema } from "./closeAccount.schema";

export default async function closeAccountController(
    input: unknown,
): Promise<User | null> {
    const id = "1";

    const validation = await closeAccountSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    return prismaClient.user.delete({ where: { id } });
}
