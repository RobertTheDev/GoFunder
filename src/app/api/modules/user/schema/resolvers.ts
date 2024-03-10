import getProfile from "@/app/api/modules/user/resolvers/getProfile";

const userResolvers = {
    Query: {
        profile: getProfile,
    },
};

export default userResolvers;
