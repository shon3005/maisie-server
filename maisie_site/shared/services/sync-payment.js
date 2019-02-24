import gql from 'graphql-tag'

export default (
  apolloClient,
  state,
  code,
  host_id
) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation syncPaymentAccount($state: String!, $code: String!, $id: String!) {
          syncPaymentAccount(input: {state: $state, code: $code, id: $id}) {
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
              support
              last4
              host {
                id
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
            }
          }
        }
      `,
      variables: { state, code, id: host_id },
    })