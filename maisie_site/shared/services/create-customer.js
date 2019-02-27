import gql from 'graphql-tag'

export default (
  apolloClient,
  source,
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation createCustomer(
          $source: String!,
        ) {
          createCustomer(
            input: {
              source: $source,
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
      `,
      variables:
      {
        source: source,
      }
    })
}
