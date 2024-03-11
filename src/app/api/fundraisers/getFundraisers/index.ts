import { Fundraiser } from "@prisma/client";
import prismaClient from "@/app/api/configs/db/prisma/prismaClient";

export default async function getFundraisersController(): Promise<
    Fundraiser[]
> {
    return prismaClient.fundraiser.findMany();
}
