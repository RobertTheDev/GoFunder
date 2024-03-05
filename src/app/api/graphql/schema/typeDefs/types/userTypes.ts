import gql from 'graphql-tag';

export const userTypes = gql`
    type User {
        id: String!
        createdAt: DateTime!
        updatedAt: DateTime
        annonymous: Boolean!
        defaultCurrency: String!
        donations: [Donation]
        email: String
        emailVerificationToken: String
        emailVerificationTokenExpiry: DateTime
        emailVerified: DateTime
        fundraisers: [Fundraiser]
        image: String
        mfaSecret: String
        mfaType: String
        name: String!
        password: String
        passwordResetToken: String
        passwordResetTokenExpiry: DateTime
        savedFundraisers: [SavedFundraiser]
        totalCharitesOwned: Int!
        totalDonationsAmount: Int!
        totalDonationsMade: Int!
        totalFundraisersOwned: Int!
        username: String!
    }
`;
