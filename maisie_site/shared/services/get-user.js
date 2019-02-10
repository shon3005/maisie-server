import gql from 'graphql-tag'

export default apolloClient => 
  apolloClient
    .query({
      query: gql`
        {
          getUser {
            id
            firstName
            lastName
            email
            role
          }
        }
      `
    })