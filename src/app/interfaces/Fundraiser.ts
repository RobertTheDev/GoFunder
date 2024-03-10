import { IDonation } from "./Donation";
import { ISavedFundraiser } from "./SavedFundraiser";
import { IUser } from "./User";

export interface IFundraiser {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    category: string;
    deadlineDate: string;
    defaultCurrency: string;
    description: string;
    donations: IDonation[];
    image: string;
    name: string;
    owner: IUser;
    ownerId: string;
    savedFundraisers: ISavedFundraiser[];
    slug: string;
    target: number;
    totalDonations: number;
    totalRaised: number;
}
