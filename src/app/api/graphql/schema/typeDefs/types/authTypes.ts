import gql from 'graphql-tag';

export const authTypes = gql`
    type User {
        id: String
        email: String
        password: String
        name: String
    }

    type Mutation {
        signUp(email: String, name: String, password: String): User
    }
`;
