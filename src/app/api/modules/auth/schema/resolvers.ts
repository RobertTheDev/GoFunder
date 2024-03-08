import { GraphQLArgs } from 'graphql';
import signUpController from '@/app/api/modules/auth/resolvers/signUp';

export const authResolvers = {
    Mutation: {
        signUp: (_root: unknown, args: GraphQLArgs) => signUpController(args)
    }
};
