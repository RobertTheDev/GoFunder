import gql from 'graphql-tag';

export const fundraiserTypes = gql`
    type Fundraiser {
        id: String
        title: String
    }

    type Query {
        fundraisers: [Fundraiser]
    }
`;
