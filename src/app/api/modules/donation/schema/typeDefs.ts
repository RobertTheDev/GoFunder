import gql from 'graphql-tag';

export const donationTypeDefs = gql`
    type Donation {
        id: String!
        createdAt: DateTime!
        updatedAt: DateTime
        amount: Int!
        currency: String!
        fundraiser: Fundraiser
        fundraiserId: String!
        message: String
        user: User
        userId: String!
    }

    type Query {
        donationsByCurrentUser: [Donation]
        donationsByFundraiser: [Donation]
    }
`;
