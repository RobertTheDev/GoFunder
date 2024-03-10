import { GraphQLArgs } from "graphql";
import signUpController from "@/app/api/modules/auth/resolvers/signUp";

const accountSettingsResolvers = {
    Mutation: {
        changeEmail: (_root: unknown, args: GraphQLArgs) =>
            signUpController(args),
    },
};

export default accountSettingsResolvers;
