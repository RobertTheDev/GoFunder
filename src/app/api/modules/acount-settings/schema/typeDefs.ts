import gql from "graphql-tag";

const accountSettingsTypeDefs = gql`
    type Mutation {
        changeEmail(email: String, name: String, password: String): User
    }
`;

export default accountSettingsTypeDefs;
