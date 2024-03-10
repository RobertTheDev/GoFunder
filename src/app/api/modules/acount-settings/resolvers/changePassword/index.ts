import { GraphQLError } from "graphql";
import { User } from "@prisma/client";
import prismaClient from "../../../../db/prisma/prismaClient";
import { changePasswordSchema } from "./changePassword.schema";

export default async function changePasswordController(
    input: unknown,
): Promise<User | null> {
    const id = "1";

    const validation = await changePasswordSchema.safeParseAsync(input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return prismaClient.user.update({ data, where: { id } });
}
