import { type IFundraiser } from "./Fundraiser";
import { type IUser } from "./User";

export interface IDonation {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    amount: number;
    currency: string;
    fundraiser: IFundraiser;
    fundraiserId: string;
    message: string;
    user: IUser;
    userId: string;
}
