import { accountSettingsResolvers } from "@/app/api/modules/acount-settings/schema/resolvers";
import { authResolvers } from "@/app/api/modules/auth/schema/resolvers";
import { donationResolvers } from "@/app/api/modules/donation/schema/resolvers";
import { fundraiserResolvers } from "@/app/api/modules/fundraiser/schema/resolvers";
import { savedFundraiserResolvers } from "@/app/api/modules/saved-fundraiser/schema/resolvers";
import { userResolvers } from "@/app/api/modules/user/schema/resolvers";
import { GraphQLDateTime } from "graphql-iso-date";

const dateResolvers = {
    DateTime: GraphQLDateTime,
};

export const resolvers = [
    dateResolvers,
    accountSettingsResolvers,
    authResolvers,
    donationResolvers,
    fundraiserResolvers,
    savedFundraiserResolvers,
    userResolvers,
];
