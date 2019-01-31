import gql from 'graphql-tag'

export default (
  apolloClient,
  file,
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation createCircle(
                              $file: Upload!,
                              $day: String!,
                              $description: String!,
                              $duration: Int!,
                              $end: DateTime!,
                              $start: DateTime!,
                              $name: String!,
                              $price: Float!,
                              $spaceType: String!,
                              $programLength: Int!,
                              $location: String!,
                              $time: String!
        ) {
          createCircle(
                      input: {
                        file: $file,
                        day: $day,
                        description: $description,
                        duration: $duration,
                        end: $end,
                        start: $start,
                        name: $name,
                        price: $price,
                        spaceType: $spaceType,
                        programLength: $programLength,
                        location: $location,
                        time: $time
                      }
          ) {
            id
          }
        }
      `,
      variables: {
                    file: file,
                    day: "Monday",
                    description: "Hello World",
                    duration: 60,
                    end: "2018-05-17T12:11:06.3684072Z",
                    start: "2018-05-17T12:11:06.3684072Z",
                    name: "Sample Group",
                    price: 45,
                    spaceType: "organization",
                    programLength: 12,
                    location: "Williamsburg",
                    time: "3:40"
                  }
    })
}
