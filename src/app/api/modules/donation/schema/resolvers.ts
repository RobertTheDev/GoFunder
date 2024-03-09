import getDonationsByFundraiserController from '@/app/api/modules/donation/resolvers/getDonationsByFundraiser';
import getDonationsByUserController from '@/app/api/modules/donation/resolvers/getDonationsByUser';

export const donationResolvers = {
    Query: {
        donationsByCurrentUser: getDonationsByUserController,
        donationsByFundraiser: getDonationsByFundraiserController
    }
};
