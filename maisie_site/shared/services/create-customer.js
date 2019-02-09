import gql from 'graphql-tag'

export default (
  apolloClient,
  source,
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation createCustomer(
          $source: String!,
        ) {
          createCustomer(
            input: {
              source: $source,
            }
          )
        }
      `,
      variables:
      {
        source: source,
      }
    })
}
