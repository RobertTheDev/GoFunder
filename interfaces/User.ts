import IDonation from './Donation';
import ISavedFundraiser from './SavedFundraiser';

export default interface IUser {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    annonymous: boolean;
    defaultCurrency: string;
    donations: IDonation[];
    email: string | null;
    emailVerified: Date | null;
    imageUrl: string | null;
    mfaSecret: string | null;
    mfaType: string | null;
    name: string;
    password: string | null;
    savedFundraisers: ISavedFundraiser[];
    totalCharitesOwned: number;
    totalDonationsAmount: number;
    totalDonationsMade: number;
    totalFundraisersOwned: number;
    username: string;
}