import { type IDonation } from "./Donation";
import { type IFundraiser } from "./Fundraiser";
import { type ISavedFundraiser } from "./SavedFundraiser";

export interface IUser {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    annonymous: boolean;
    defaultCurrency: string;
    donations: IDonation[];
    email: string;
    emailVerificationToken: string;
    emailVerificationTokenExpiry: Date;
    emailVerified: Date;
    fundraisers: IFundraiser[];
    image: string;
    mfaSecret: string;
    mfaType: string;
    name: string;
    password: string;
    passwordResetToken: string;
    passwordResetTokenExpiry: Date;
    savedFundraisers: ISavedFundraiser[];
    totalCharitesOwned: number;
    totalDonationsAmount: number;
    totalDonationsMade: number;
    totalFundraisersOwned: number;
    username: string;
}
