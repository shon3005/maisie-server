import gql from 'graphql-tag'

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        {
          users {
            id
            firstName
          }
        }
      `
    })
    .then(({ data }) => {
      return { allUsers: data }
    })
    .catch((err) => {
      // Fail gracefully
      return { allUsers: {} }
    })