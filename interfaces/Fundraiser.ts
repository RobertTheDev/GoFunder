import IDonation from './Donation';
import IUser from './User';

export default interface IFundraiser {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    category: string;
    deadlineDate: Date | null;
    defaultCurrency: string;
    description: string | null;
    donations: IDonation[];
    image: string;
    name: string;
    owner: IUser;
    ownerId: string;
    slug: string;
    target: number;
    totalDonations: number;
    totalRaised: number;
}
