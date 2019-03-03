import gql from 'graphql-tag'

export default gql`
  query circles {
    circles {
      id
      title
      description
      price
      frequency
      hour
      minute
      ampm
      length
      neighborhood
      address
      locationType
      min
      imageUrl
      startDate
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