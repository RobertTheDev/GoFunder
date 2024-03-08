import gql from 'graphql-tag';

export const authTypeDefs = gql`
    type Mutation {
        signUp(email: String, name: String, password: String): User
    }
`;
