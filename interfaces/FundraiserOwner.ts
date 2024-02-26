import IFundraiser from './Fundraiser';
import IUser from './User';

export default interface IFundraiserOwner {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    fundraiser: IFundraiser;
    fundraiserId: string;
    user: IUser;
    userId: string;
}
