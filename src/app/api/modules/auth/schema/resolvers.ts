import signUpResolver from "@/app/api/modules/auth/resolvers/signUp";

export const authResolvers = {
    Mutation: {
        signUp: (
            _root: unknown,
            args: { input: { email: string; name: string } },
        ) => signUpResolver({ args }),
    },
};
