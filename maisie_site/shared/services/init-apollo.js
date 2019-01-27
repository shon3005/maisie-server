import { ApolloClient, InMemoryCache } from 'apollo-boost'
// import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
// import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'
import { createLink } from 'apollo-absinthe-upload-link'
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState, { getToken }) {
  const httpLink = createHttpLink({
    uri: '/api/graphql',
    credentials: 'same-origin'
  })

  // const uploadLink = createUploadLink({
  //   uri: '/api/graphql',
  //   credentials: 'same-origin'
  // })

  const uploadLink = createLink({
    uri: '/api/graphql',
    credentials: 'same-origin'
  })

  const authLink = setContext((_, { headers }) => {
    const token = getToken()
    return {
      headers: {
        ...headers,
        authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJtYWlzaWVfYXBpIiwiZXhwIjoxNTUxMDQzNTQ2LCJpYXQiOjE1NDg2MjQzNDYsImlzcyI6Im1haXNpZV9hcGkiLCJqdGkiOiI5N2E4MTU4Yi1mYzU5LTQ3Y2UtYmIwMS1mM2ZjMTdlNjg3ZWYiLCJuYmYiOjE1NDg2MjQzNDUsInN1YiI6IjEiLCJ0eXAiOiJhY2Nlc3MifQ.B8RXtf1AIGvsQXoQ5JnUSiYqhQ-1RgpG3KjqnGCrMtk-mp6HZnBGlKdioBX8Hk7XBLrrWBJNkVAjyGZJ1HZ6AQ'
        // authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  // console.log(createUploadLink(authLink.concat(httpLink)))
  // console.log(authLink.concat(httpLink));
  // link: ApolloLink.from([ authLink, httpLink ]),
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, locations, path }) => console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ));
        }
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      }),
      authLink,
      uploadLink
    ]),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo (initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}
