import gql from "graphql-tag";

const fundraiserTypeDefs = gql`
    type Fundraiser {
        id: String!
        createdAt: DateTime!
        updatedAt: DateTime
        category: String!
        deadlineDate: String
        defaultCurrency: String!
        description: String!
        donations: [Donation]
        image: String!
        name: String!
        owner: User
        ownerId: String!
        savedFundraisers: [SavedFundraiser]
        slug: String!
        target: Int!
        totalDonations: Int!
        totalRaised: Int!
    }

    type Query {
        fundraiserBySlug(slug: String!): Fundraiser
        fundraisers: [Fundraiser]
        fundraisersByCategory(category: String!): [Fundraiser]
        ownedFundraisers: [Fundraiser]
    }
`;

export default fundraiserTypeDefs;
