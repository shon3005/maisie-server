import gql from 'graphql-tag'

export default (
  apolloClient,
  host_id
) =>
  apolloClient
    .query({
      query: gql`
        query stripeTransactions($id: String!) {
            stripeTransactions(hostId: $id) {
            balance
            transactions {
                circleName
                date
                amount
            }
            url
            }
        }
    `,
    variables: { id: host_id },
})