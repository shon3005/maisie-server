import gql from 'graphql-tag'

export default gql`
  query circles {
    circles {
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
      image_url
    }
  }
`