// GraphQL - Queries
import { gql } from '@apollo/client';

export const GET_USER = gql`
    query {
        getUser {
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