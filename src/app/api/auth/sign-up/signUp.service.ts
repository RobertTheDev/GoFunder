import { Prisma } from "@prisma/client";
import prismaClient from "@/app/api/db/prisma/prismaClient";

// This handlers updates a donation using a unique field and an input into the database.
export default async function signUp(params: { data: Prisma.UserCreateInput }) {
    const { data } = params;
    return prismaClient.user.create({
        data,
    });
}
