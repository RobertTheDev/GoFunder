import { User, Prisma } from "@prisma/client";
import prismaClient from "@/app/api/db/prisma/prismaClient";

// This handler creates a user with an input into the database.
async function createUser(data: Prisma.UserCreateInput): Promise<User> {
    return prismaClient.user.create({
        data,
    });
}

// This handler deletes a user using a unique field in the database.
async function deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return prismaClient.user.delete({
        where,
    });
}

// This handlers finds a user using a unique field in the database.
async function findUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
): Promise<User | null> {
    return prismaClient.user.findUnique({
        where: userWhereUniqueInput,
    });
}

// This handlers finds and filters for users from the database.
async function findUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
}): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return prismaClient.user.findMany({
        skip,
        take,
        cursor,
        where,
        orderBy,
    });
}

// This handlers updates a user using a unique field and an input into the database.
async function updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
}): Promise<User> {
    const { where, data } = params;
    return prismaClient.user.update({
        data,
        where,
    });
}

const userService = {
    createUser,
    deleteUser,
    findUser,
    findUsers,
    updateUser,
};

export default userService;
