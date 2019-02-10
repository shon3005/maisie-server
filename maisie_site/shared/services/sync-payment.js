import gql from 'graphql-tag'

export default (
  apolloClient,
  state,
  code
) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation syncPaymentAccount($state: String!, $code: String!) {
          syncPaymentAccount(input: {state: $state, code: $code}) {
            id
          }
        }
      `,
      variables: { state, code },
    })