import getFundraiserController from "@/app/api/modules/fundraiser/resolvers/getFundraiser";
import getFundraisersController from "@/app/api/modules/fundraiser/resolvers/getFundraisers";
import getOwnedFundraisersQuery from "@/app/api/modules/fundraiser/resolvers/getOwnedFundraisers";

const fundraiserResolvers = {
    Query: {
        fundraiserBySlug: (_root: unknown, args: { slug: string }) =>
            getFundraiserController(args.slug),
        fundraisers: getFundraisersController,
        fundraisersByCategory: getFundraisersController,
        ownedFundraisers: getOwnedFundraisersQuery,
    },
};

export default fundraiserResolvers;
