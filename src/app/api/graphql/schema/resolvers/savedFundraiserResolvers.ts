import getSavedFundraiserController from '@/app/api/controllers/saved-fundraisers/getSavedFundraisers.controller';

export const savedFundraiserResolvers = {
    Query: {
        savedFundraisers: getSavedFundraiserController
    }
};
