import { PrismaClient } from "@prisma/client";

// Variable defines the prisma client to be re-used globally across the app.
const prismaClient = new PrismaClient();

export default prismaClient;
