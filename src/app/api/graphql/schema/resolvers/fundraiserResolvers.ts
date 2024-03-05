import getFundraiserController from '@/app/api/controllers/fundraisers/getFundraiser.controller';
import getFundraisersController from '@/app/api/controllers/fundraisers/getFundraisers.controller';

export const fundraiserResolvers = {
    Query: {
        fundraiserBySlug: (_root: unknown, args: { slug: string }) =>
            getFundraiserController(args.slug),
        fundraisers: getFundraisersController,
        fundraisersByCategory: getFundraisersController,
        fundraisersByOwnerId: getFundraisersController
    }
};
