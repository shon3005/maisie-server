import gql from 'graphql-tag'

export default gql`
  query get_user_by_id($userId: ID!) {
    get_user_by_id(userId: $userId) {
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
`
