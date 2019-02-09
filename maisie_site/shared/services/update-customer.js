import gql from 'graphql-tag'

export default (
  apolloClient,
  source,
) => {
  return apolloClient
    .mutate({
      mutation: gql`
        mutation updateCustomer(
          $source: String!,
        ) {
          updateCustomer(
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
