import gql from 'graphql-tag'

export default (circleId, apolloClient) =>
  apolloClient
    .query({
      query: gql`
        query circle($id: ID!) {
          circle(input: {id: $id}) {
            id
            name
          }
        }
      `,
      variables: {id: circleId}
    })
    .then(({ data }) => {
        console.log(data)
      return { circleDetails: data }
    })
    .catch((err) => {
        console.log(err)
      // Fail gracefully
      return { allUsers: {} }
    })


    // apolloClient
    // .mutate({
    //   mutation: gql`
    //     mutation registerUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $passwordConfirmation: String!, $zip: String!) {
    //       registerUser(input: {firstName: $firstName, lastName: $lastName, email: $email, password: $password, passwordConfirmation: $passwordConfirmation, zip: $zip}) {
    //         id
    //       }
    //     }
    //   `,
    //   variables: { firstName, lastName, email, password, passwordConfirmation, zip },
    // })
