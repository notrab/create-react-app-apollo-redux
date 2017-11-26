import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI
  }),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  dataIdFromObject: o => o.id
});

export default client;
