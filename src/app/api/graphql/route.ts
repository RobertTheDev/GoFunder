import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import schema from "./schema";

const server = new ApolloServer({
    schema,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
