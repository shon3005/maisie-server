import gql from 'graphql-tag'

export default apolloClient => 
  apolloClient
    .query({
      query: gql`
        query stripeAuthorize {
          stripeAuthorize
        }
      `
    })