import gql from 'graphql-tag';

export const authTypes = gql`
    type Mutation {
        signUp(email: String, name: String, password: String): User
    }
`;
