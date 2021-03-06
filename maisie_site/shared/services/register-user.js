import gql from 'graphql-tag'

export default (
  apolloClient,
  firstName,
  lastName,
  email,
  password,
  passwordConfirmation
) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation registerUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $passwordConfirmation: String!) {
          registerUser(input: {firstName: $firstName, lastName: $lastName, email: $email, password: $password, passwordConfirmation: $passwordConfirmation}) {
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
      variables: { firstName, lastName, email, password, passwordConfirmation },
    })