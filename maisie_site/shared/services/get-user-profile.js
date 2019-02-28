import gql from 'graphql-tag'

export default gql`
  query getUserById($userId: ID!) {
    getUserById(userId: $userId) {
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
    }
  }
`
