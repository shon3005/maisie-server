import gql from 'graphql-tag'

export default (
  apolloClient,
  email,
  password,
) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation loginUser($email: String!, $password: String!) {
          loginUser(input: {email: $email, password: $password}) {
            token
            user {
              id
              firstName
              lastName
              email
            }
          }
        }
      `,
      variables: { email, password },
    }).catch((err) => {
      // Fail gracefully
      return {}
    })
