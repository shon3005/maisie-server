import gql from 'graphql-tag'

export default (
  apolloClient,
  requestId,
  hostId
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation denyRequest(
          $requestId: ID!,
          $hostId: ID!
        ) {
          denyRequest(
            input: {
              requestId: $requestId,
              hostId: $hostId
            }
          ) {
            user {
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
                day
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
              }
              requests {
                  circle {
                      id
                  }
              }
            }
          }
        }
      `,
      variables:
      {
        requestId,
        hostId
      }
    })
}