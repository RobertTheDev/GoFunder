import { makeExecutableSchema } from '@graphql-tools/schema';
import { typeDefs } from './typeDefs';
import { fundraiserResolvers } from './resolvers/fundraiserResolvers';
import { authResolvers } from './resolvers/authResolvers';
import { dateResolvers } from './resolvers/dateResolvers';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [dateResolvers, authResolvers, fundraiserResolvers]
    // logger, // optional
    // resolverValidationOptions: {}, // optional
    // parseOptions: {}, // optional
    // inheritResolversFromInterfaces: false // optional
});
