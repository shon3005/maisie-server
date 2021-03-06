import gql from 'graphql-tag'

export default (
  apolloClient,
  email,
  password,
) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation loginUser($email: String!, $password: String!) {
          loginUser(input: {email: $email, password: $password}) {
            token
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
              imageUrl
              last4
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
      variables: { email, password },
    }).catch((err) => {
      // Fail gracefully
      return {}
    })
