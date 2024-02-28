import IFundraiser from './Fundraiser';
import IUser from './User';

export default interface IDonation {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    amount: number;
    currency: string;
    fundraiser: IFundraiser;
    fundraiserId: string;
    message: string | null;
    user: IUser;
    userId: string;
}
