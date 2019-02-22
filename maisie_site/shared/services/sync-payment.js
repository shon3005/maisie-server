import gql from 'graphql-tag'

export default (
  apolloClient,
  state,
  code,
  host_id
) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation syncPaymentAccount($state: String!, $code: String!, $id: String!) {
          syncPaymentAccount(input: {state: $state, code: $code, id: $id}) {
            id
          }
        }
      `,
      variables: { state, code, id: host_id },
    })