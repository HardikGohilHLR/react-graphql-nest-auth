// GraphQl
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:3001',
    cache: new InMemoryCache(),
});