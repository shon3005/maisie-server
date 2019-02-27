import gql from 'graphql-tag'

export default gql`
  query userCircles($userId: ID!) {
    userCircles(userId: $userId) {
      id
      title
      description
      price
      frequency
      day
      hour
      minute
      ampm
      length
      neighborhood
      address
      locationType
      min
      imageUrl
      user {
        id
      }
      requests {
        id
        user {
          id
          firstName
          lastName
          email
        }
      }
      members {
        id
        user {
          id
          firstName
          lastName
          email
        }
      }
    }
  }
`

// user {
//   id
// }