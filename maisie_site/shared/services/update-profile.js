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
          $bio: String
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
              bio: $bio
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
              host {
                id
                description
                license
                imageUrl
                education
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
      variables: {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        phone: profile.phone,
        neighborhood: profile.neighborhood,
        school: profile.school,
        work: profile.work,
        bio: profile.bio
      }
    });