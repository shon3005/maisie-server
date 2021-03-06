import gql from 'graphql-tag'

export default (
  apolloClient,
  profile
) =>
  apolloClient
    .mutate({
      mutation: gql`
        mutation updateProfile(
          $firstName: String,
          $lastName: String,
          $email: String,
          $phone: String,
          $neighborhood: String,
          $school: String,
          $work: String,
          $bio: String,
          $hostId: ID
        ) {
          updateProfile(
            input: {
              firstName: $firstName,
              lastName: $lastName,
              email: $email,
              phone: $phone,
              neighborhood: $neighborhood,
              school: $school,
              work: $work,
              bio: $bio,
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
              imageUrl
              support
              last4
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
            }
          }
        }
      `,
      variables: {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone,
        neighborhood: profile.neighborhood,
        school: profile.school,
        work: profile.work,
        bio: profile.bio,
        hostId: profile.hostId
      }
    });