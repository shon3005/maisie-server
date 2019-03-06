import gql from 'graphql-tag'

export default (
  apolloClient,
  requestId,
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation denyRequest(
          $requestId: ID!
        ) {
          denyRequest(
            input: {
              requestId: $requestId,
            }
          )
        }
      `,
      variables:
      {
        requestId,
      }
    })
}