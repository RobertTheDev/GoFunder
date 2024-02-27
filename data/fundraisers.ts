import type IFundraiser from '../interfaces/Fundraiser';

const fundraisers: IFundraiser[] = [
    {
        donations: [],
        fundraiserOwners: [],
        headline: 'string',
        name: 'string',
        slug: '',
        ownerId: 'string',
        id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
        category: 'string',
        deadlineDate: null,
        defaultCurrency: 'GBP',
        description: null,
        title: 'Help African Children',
        target: 240,
        totalDonations: 23,
        totalRaised: 123,
        owner: {
            id: '22',
            createdAt: new Date(),
            updatedAt: new Date(),
            annonymous: false,
            defaultCurrency: 'GBP',
            donations: [],
            email: null,
            emailVerified: null,
            imageUrl:
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        },
        imageUrl:
            'https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

export default fundraisers;
