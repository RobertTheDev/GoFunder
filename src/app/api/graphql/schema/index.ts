import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './typeDefs';
import { fundraiserResolvers } from './resolvers/fundraiserResolvers';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [fundraiserResolvers]
    // logger, // optional
    // resolverValidationOptions: {}, // optional
    // parseOptions: {}, // optional
    // inheritResolversFromInterfaces: false // optional
});
