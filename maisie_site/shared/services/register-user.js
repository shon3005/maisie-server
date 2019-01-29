import gql from 'graphql-tag'

export default (
  apolloClient,
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation,
  zip
) => {
  apolloClient
    .mutate({
      mutation: gql`
        mutation registerUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $passwordConfirmation: String!, $zip: String!) {
          registerUser(input: {firstName: $firstName, lastName: $lastName, email: $email, password: $password, passwordConfirmation: $passwordConfirmation, zip: $zip}) {
            id
          }
        }
      `,
      variables: { firstName, lastName, email, password, passwordConfirmation, zip },
    })
  }