import getFundraisersController from '@/app/api/controllers/fundraisers/getFundraisers.controller';

export const fundraiserResolvers = {
    Query: {
        fundraisers: getFundraisersController
    }
};
