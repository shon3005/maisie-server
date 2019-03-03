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
          ) {
            id
            firstName
            lastName
            email
            role
            phone
            neighborhood
            school
            work
            bio
            last4
            imageUrl
            support
            host {
                id
                firstName
                lastName
                description
                license
                imageUrl
                education
                hasStripeAccount
            }
            circles {
                address
                ampm
                description
                frequency
                hour
                minute
                min
                imageUrl
                title
                price
                neighborhood
                locationType
                length
                id
                startDate
                tags
                members {
                    id
                }
            }
            requests {
                circle {
                    id
                }
            }
          }
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