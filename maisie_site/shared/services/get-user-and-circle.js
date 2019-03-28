import gql from 'graphql-tag'

export default gql`
  query UserAndCircle($circleId: ID!, $userId: ID) {
    UserAndCircle(input: {circleId: $circleId, userId: $userId}) {
      circle {
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
        tags
        startDate
        whoShouldJoin
        subscription
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
        imageUrl
        last4
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
          startDate
          tags
          id
        }
        requests {
          circle {
            id
          }
        }
        members {
          circle {
            address
            ampm
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
            startDate
            tags
            id
          }
        }   
      }
    }
  }
`