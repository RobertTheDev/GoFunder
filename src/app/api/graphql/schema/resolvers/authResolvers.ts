import { GraphQLArgs } from 'graphql';
import signUpController from '@/app/api/controllers/auth/signUp';

export const authResolvers = {
    Mutation: {
        signUp: (_root: unknown, args: GraphQLArgs) => signUpController(args)
    }
};
