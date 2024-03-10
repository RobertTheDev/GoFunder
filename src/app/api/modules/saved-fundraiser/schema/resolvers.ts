import getSavedFundraisersQuery from "@/app/api/modules/saved-fundraiser/resolvers/getSavedFundraisers";

const savedFundraiserResolvers = {
    Query: {
        savedFundraisers: getSavedFundraisersQuery,
    },
};

export default savedFundraiserResolvers;
