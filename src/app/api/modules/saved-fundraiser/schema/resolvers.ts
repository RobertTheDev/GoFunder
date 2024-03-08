import getSavedFundraiserController from '@/app/api/modules/saved-fundraiser/resolvers/getSavedFundraisers';

export const savedFundraiserResolvers = {
    Query: {
        savedFundraisers: getSavedFundraiserController
    }
};
