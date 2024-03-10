import gql from "graphql-tag";

export const accountSettingsTypeDefs = gql`
    type Mutation {
        changeEmail(email: String, name: String, password: String): User
    }
`;
