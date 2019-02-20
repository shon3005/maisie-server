import gql from 'graphql-tag'

export default (
  apolloClient,
  settings
) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation updatePassword(
          $oldPassword: String,
          $password: String,
          $passwordConfirmation: String,
        ) {
          updatePassword(
            input: {
              oldPassword: $oldPassword
              password: $password,
              passwordConfirmation: $passwordConfirmation,
            }
          )
        }
      `,
      variables: {
        oldPassword: settings.oldPassword,
        password: settings.password,
        passwordConfirmation: settings.passwordConfirmation,
      }
    });