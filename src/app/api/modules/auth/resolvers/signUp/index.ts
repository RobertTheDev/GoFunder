import { GraphQLError } from "graphql";
import { signUpSchema } from "@/app/api/modules/auth/resolvers/signUp/signUp.schema";

export default async function signUpResolver(props: {
    args: { input: { email: string; name: string } };
}): Promise<{ email: string; name: string } | null> {
    const { args } = props;

    const validation = await signUpSchema.safeParseAsync(args.input);

    if (!validation.success) {
        throw new GraphQLError(validation.error.errors[0].message);
    }

    const { data } = validation;

    return data;
}
