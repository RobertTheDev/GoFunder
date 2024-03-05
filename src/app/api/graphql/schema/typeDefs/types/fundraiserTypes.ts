import gql from 'graphql-tag';

export const fundraiserTypes = gql`
    type User {
        id: String
        name: String
        email: String
        username: String
        image: String
    }

    type Donation {
        id: String
        amount: Int
        message: String
        user: User
    }

    type Fundraiser {
        id: String!
        image: String!
        name: String!
        slug: String!
        target: Int!
        totalDonations: Int!
        totalRaised: Int!
        donations: [Donation]
    }

    type Query {
        fundraiserBySlug(slug: String): Fundraiser
        fundraisers: [Fundraiser]
    }
`;
