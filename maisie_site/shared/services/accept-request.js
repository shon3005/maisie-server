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
        mutation acceptRequest(
          $requestId: ID!,
          $userId: ID!,
          $circleId: ID!,
          $hostId: ID!
        ) {
          acceptRequest(
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