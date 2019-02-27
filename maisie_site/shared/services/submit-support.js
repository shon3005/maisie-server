import gql from 'graphql-tag'

export default (
  apolloClient,
  user,
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation submitSupport(
          $phone: String!,
          $support: Boolean!,
        ) {
          submitSupport(
            input: {
              phone: $phone,
              support: $support,
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
              description
              license
              imageUrl
              education
              firstName
              lastName
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
        phone: user.phone,
        support: user.support
      }
    })
}