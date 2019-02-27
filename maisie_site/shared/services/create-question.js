import gql from 'graphql-tag'

export default (
  apolloClient,
  circleId,
  description
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation createQuestion(
          $circleId: ID!,
          $description: String!,
        ) {
          createQuestion(
            input: {
              circleId: $circleId,
              description: $description,
            }
          )
        }
      `,
      variables:
      {
        circleId,
        description
      }
    })
}