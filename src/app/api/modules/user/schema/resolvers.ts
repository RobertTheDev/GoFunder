import getProfile from "@/app/api/modules/user/resolvers/getProfile";

export const userResolvers = {
    Query: {
        profile: getProfile,
    },
};
