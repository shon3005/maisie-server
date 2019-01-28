import gql from 'graphql-tag'

export default apolloClient => {
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
      console.log(data);
      return { userDetails: data.getUser }
    })
    .catch((err) => {
      // Fail gracefully
      console.log(err);
      return { userDetails: {} }
    })
  }