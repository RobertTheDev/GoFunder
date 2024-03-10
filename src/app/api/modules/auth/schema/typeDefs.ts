import gql from "graphql-tag";

const authTypeDefs = gql`
    type SignUpResponse {
        email: String
        name: String
    }

    input SignUpInput {
        email: String!
        name: String!
    }

    type Mutation {
        signUp(input: SignUpInput!): SignUpResponse
    }
`;

export default authTypeDefs;
