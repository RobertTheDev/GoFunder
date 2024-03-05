import getDonationsByFundraiserController from '@/app/api/controllers/donation/getDonationsByFundraiser.controller';
import getDonationsByUserController from '@/app/api/controllers/donation/getDonationsByUser.controller';

export const donationResolvers = {
    Query: {
        donationsByCurrentUser: getDonationsByUserController,
        donationsByFundraiser: getDonationsByFundraiserController,
        donationsByUserId: getDonationsByUserController
    }
};
