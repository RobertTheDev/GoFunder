import gql from 'graphql-tag';

export const profileTypes = gql`
    type Query {
        profile: User
    }
`;
