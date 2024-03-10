import { type IFundraiser } from "./Fundraiser";
import { type IUser } from "./User";

export interface ISavedFundraiser {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    fundraiser: IFundraiser;
    fundraiserId: string;
    user: IUser;
    userId: string;
}
