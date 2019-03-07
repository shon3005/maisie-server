import gql from 'graphql-tag'

export default (
  apolloClient,
  requestId,
  userId,
  circleId,
  hostId
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation denyRequest(
          $requestId: ID!,
          $userId: ID!,
          $circleId: ID!,
          $hostId: ID!
        ) {
          denyRequest(
            input: {
              requestId: $requestId,
              userId: $userId,
              circleId: $circleId,
              hostId: $hostId
            }
          )
        }
      `,
      variables:
      {
        requestId,
        userId,
        circleId,
        hostId
      }
    })
}