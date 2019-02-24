import LargeText from '../../../shared/components/text/largeText.js';
import Button from '../../../shared/components/button.js';
import Card from './components/card.js';
import stripeTransactions from '../../../shared/services/stripe-transactions';
import hostPayout from '../../../shared/services/host-payout';
import { Query, ApolloConsumer } from 'react-apollo';

export default (props) =>
  const finances = props.finances;
  // const stripeTransactionsResponse = stripeTransactions.data;
  const transactions = finances ? finances.transactions : null;
  const balance = finances ? finances.balance / 100 : null;
  const url = finances ? finances.url : null;
  <div className="hostfinances col">
    <div className="hostfinances__top col">
      <div className="row-sb-c">
        <LargeText>Recent Transactions</LargeText>
        <div className="hostfinances__top_right-bal row-fs-c">
          <span className="tag">Available balance: </span>
          <span className="text">{" $" + balance}</span>
        </div>
      </div>
      <div className="hostfinances__top-btn row-sb-c">
        <Button kind="ext" weight="light" href={url} target="_blank">Visit Stripe Dashboard</Button>
        <ApolloConsumer>
          {client =>
            <Button kind="primary" weight="purple" onClick={() => payout(client, props.host.id)}><span>Pay out<span style={{fontWeight: "600"}}>{" $" + balance}</span></span></Button>
          }
        </ApolloConsumer>
      </div>
      {transactions ?
        transactions.map((transaction, i) => (
          <Card key={i} transaction={transaction}/>
        )) : null
      }
      <div style={{height: 20}} />
      <a href="mailto:providers@heymaisie.com">Something incorrect?</a>
    </div>
)};

const payout = async (client, hostId) => {
  await hostPayout(client, hostId)
}
{/* <Query query={stripeTransactions} variables={{id: props.host.id}}>
{stripeTransactions => {
}}
</Query> */}
  // <a href="https://www.stripe.com" className="hostfinances__top-cta row-c-c"><span>Stripe Dashboard</span><img src="../../../static/shared/external_lightblue.svg" /></a>
