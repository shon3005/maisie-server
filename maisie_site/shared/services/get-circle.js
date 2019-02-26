import gql from 'graphql-tag'

export default gql`
  query circle($id: ID!) {
    circle(input: {id: $id}) {
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
      max
      imageUrl
      tags
      user {
        host {
          id
          firstName
          lastName
          imageUrl
          license
          education
          description
        }
      }
    }
  }
`