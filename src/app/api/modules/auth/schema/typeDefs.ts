import gql from "graphql-tag";

export const authTypeDefs = gql`
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
