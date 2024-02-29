import gql from 'graphql-tag';

export const fundraiserTypes = gql`
    type Fundraiser {
        id: String!
        image: String!
        name: String!
    }

    type Query {
        fundraisers: [Fundraiser]
    }
`;
