import gql from 'graphql-tag'

export default (
  apolloClient,
  host,
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation updateHost(
          $id: String!,
          $license: String!,
          $education: String!,
          $description: String!,
        ) {
          updateHost(
            input: {
              id: $id,
              license: $license,
              education: $education,
              description: $description
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
      variables:
      {
        id: host.id,
        license: host.license,
        education: host.education,
        description: host.description
      }
    })
}