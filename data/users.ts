import type IUser from '../interfaces/User';

const fundraisers: IUser[] = [
    {
        id: '22',
        createdAt: new Date(),
        updatedAt: new Date(),
        annonymous: false,
        defaultCurrency: 'GBP',
        donations: [],
        email: null,
        emailVerified: null,
        imageUrl: null,
        mfaSecret: null,
        mfaType: null,
        name: 'James Doe',
        password: 'Password1!',
        savedFundraisers: [],
        totalCharitesOwned: 0,
        totalDonationsAmount: 0,
        totalDonationsMade: 0,
        totalFundraisersOwned: 0,
        username: 'jamesdoe'
    }
];

export default fundraisers;
