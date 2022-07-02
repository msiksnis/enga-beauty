import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHCMS_API,
  cache: new InMemoryCache(),
});

export default client;
