// GraphQL Auth Mutations
import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
    mutation login($email: String! $password: String!) {
        login(login: { email: $email, password: $password }) {
            _id
            firstName
            lastName
            email
            password
            token
            createdAt
            updatedAt
        }
    }
`;