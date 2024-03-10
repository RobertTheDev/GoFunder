import { type IDonation } from "./Donation";
import { type ISavedFundraiser } from "./SavedFundraiser";
import { type IUser } from "./User";

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
