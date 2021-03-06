import gql from 'graphql-tag'

export default (
  apolloClient,
  circleId,
  hostId
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation createRequest(
          $circleId: ID!,
          $hostId: ID!,
        ) {
          createRequest(
            input: {
              circleId: $circleId,
              hostId: $hostId,
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
                startDate
                tags
                id
              }
              requests {
                circle {
                  id
                }
              }
              members {
                circle {
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
                  startDate
                  tags
                  id
                }
              }
            }
          }
        }
      `,
      variables:
      {
        circleId,
        hostId
      }
    })
}