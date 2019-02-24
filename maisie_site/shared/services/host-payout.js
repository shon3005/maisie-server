import gql from 'graphql-tag'

export default (
  apolloClient,
  hostId,
) =>
  apolloClient
    .query({
      query: gql`
        query hostPayout($hostId: String!) {
          hostPayout(hostId: $hostId)
        }
      `,
      variables: { hostId },
    }).catch((err) => {
      // Fail gracefully
      return {}
    })