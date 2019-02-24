import gql from 'graphql-tag'

export default gql`
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
`