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
      max
      imageUrl
      startDate
      tags
      subscription
      members {
        id
      }
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