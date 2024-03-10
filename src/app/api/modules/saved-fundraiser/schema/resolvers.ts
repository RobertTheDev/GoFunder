import getSavedFundraisersQuery from "@/app/api/modules/saved-fundraiser/resolvers/getSavedFundraisers";

export const savedFundraiserResolvers = {
    Query: {
        savedFundraisers: getSavedFundraisersQuery,
    },
};
