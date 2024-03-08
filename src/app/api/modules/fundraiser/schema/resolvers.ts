import getFundraiserController from '@/app/api/modules/fundraiser/resolvers/getFundraiser';
import getFundraisersController from '@/app/api/modules/fundraiser/resolvers/getFundraisers';

export const fundraiserResolvers = {
    Query: {
        fundraiserBySlug: (_root: unknown, args: { slug: string }) =>
            getFundraiserController(args.slug),
        fundraisers: getFundraisersController,
        fundraisersByCategory: getFundraisersController,
        fundraisersByOwnerId: getFundraisersController
    }
};
