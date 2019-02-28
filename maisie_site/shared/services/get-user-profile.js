import gql from 'graphql-tag'

export default gql`
  query user($id: ID!) {
    user(input: {id: $id}) {
      id
      firstName
      lastName
      email
      role
    }
  }
`
