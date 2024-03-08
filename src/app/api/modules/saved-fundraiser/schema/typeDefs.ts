import gql from 'graphql-tag';

export const savedFundraiserTypeDefs = gql`
    type SavedFundraiser {
        id: String!
        createdAt: DateTime!
        updatedAt: DateTime
        fundraiser: Fundraiser
        fundraiserId: String!
        user: User
        userId: String!
    }

    type Query {
        savedFundraisers: [SavedFundraiser]
    }
`;
