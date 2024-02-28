import IDonation from './Donation';
import IFundraiser from './Fundraiser';
import ISavedFundraiser from './SavedFundraiser';

export default interface IUser {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    annonymous: boolean;
    defaultCurrency: string;
    donations: IDonation[];
    email: string | null;
    emailVerificationToken: string | null;
    emailVerificationTokenExpiry: Date | null;
    emailVerified: Date | null;
    fundraisers: IFundraiser[];
    image: string | null;
    mfaSecret: string | null;
    mfaType: string | null;
    name: string;
    password: string | null;
    passwordResetToken: string | null;
    passwordResetTokenExpiry: Date | null;
    savedFundraisers: ISavedFundraiser[];
    totalCharitesOwned: number;
    totalDonationsAmount: number;
    totalDonationsMade: number;
    totalFundraisersOwned: number;
    username: string;
}
