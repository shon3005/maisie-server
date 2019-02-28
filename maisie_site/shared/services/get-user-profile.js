import gql from 'graphql-tag'

export default gql`
  query get_user_by_id($id: ID!) {
    get_user_by_id(userId: $id) {
      id
      firstName
      lastName
      email
      role
    }
  }
`
