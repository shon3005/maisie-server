import gql from 'graphql-tag'

export default (
  apolloClient,
  circleDetails
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation createCircle(
          $title: String!,
          $description: String!,
          $frequency: String!,
          $length: String!,
          $hour: String!,
          $minute: String!,
          $ampm: String!,
          $locationType: String!,
          $neighborhood: String!,
          $address: String!,
          $price: String!,
          $min: String!,
          $max: String!,
          $tags: String!,
          $whoShouldJoin: String!
          $startDate: DateTime!
        ) {
          createCircle(
            input: {
              title: $title,
              description: $description,
              frequency: $frequency,
              length: $length,
              hour: $hour,
              minute: $minute,
              ampm: $ampm,
              locationType: $locationType,
              neighborhood: $neighborhood,
              address: $address,
              price: $price,
              min: $min,
              max: $max,
              tags: $tags,
              whoShouldJoin: $whoShouldJoin
              startDate: $startDate
            }
          ) {
            id
          }
        }
      `,
      variables:
      {
        title: circleDetails.title,
        description: circleDetails.description,
        frequency: circleDetails.frequency,
        length: circleDetails.length,
        hour: circleDetails.hour,
        minute: circleDetails.minute,
        ampm: circleDetails.ampm,
        locationType: circleDetails.location_type,
        neighborhood: circleDetails.neighborhood,
        address: circleDetails.address,
        price: circleDetails.price,
        min: circleDetails.min,
        max: circleDetails.max,
        tags: circleDetails.tags,
        whoShouldJoin: circleDetails.whoshouldjoin,
        startDate: circleDetails.startDate
      }
    })
}