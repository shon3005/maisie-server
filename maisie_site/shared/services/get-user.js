import gql from 'graphql-tag'

export default apolloClient => 
  apolloClient
    .query({
      query: gql`
        {
          getUser {
            id
          }
        }
      `
    })
    .then(({data}) => {
      return { userDetails: data.getUser }
    })
    .catch((_) => {
      // Fail gracefully
      return { userDetails: {} }
    })