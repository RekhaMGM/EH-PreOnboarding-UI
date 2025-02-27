import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
 
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});
 
const GraphQLProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
 
export default GraphQLProvider;