import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { createLink } from 'apollo-absinthe-upload-link';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const create = (initialState, { getToken, graphql_url }) => {
  const uploadLink = createLink({
    uri: graphql_url,
    credentials: 'same-origin'
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
  
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  // Set up Cache
  const cache = new InMemoryCache();

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([errorLink, authLink, uploadLink]),
    cache: cache.restore(initialState || {}),
  });
}

export default (initialState, options) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient;
}
