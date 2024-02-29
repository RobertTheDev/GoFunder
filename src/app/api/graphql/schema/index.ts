import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './typeDefs';
import { fundraiserResolvers } from './resolvers/fundraiserResolvers';
import { authResolvers } from './resolvers/authResolvers';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [authResolvers, fundraiserResolvers]
    // logger, // optional
    // resolverValidationOptions: {}, // optional
    // parseOptions: {}, // optional
    // inheritResolversFromInterfaces: false // optional
});
