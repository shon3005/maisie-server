import LargeText from '../../../shared/components/text/largeText.js';
import Button from '../../../shared/components/button.js';
import Card from './components/card.js';
import hostPayout from '../../../shared/services/host-payout';
import { ApolloConsumer } from 'react-apollo';
import FullPageSpinner from '../../../shared/components/fullpagespinner';

export default (props) => {
  const finances = props.finances;
  const transactions = finances ? finances.transactions : null;
  const balance = finances ? finances.balance / 100 : null;
  const url = finances ? finances.url : null;
  return transactions ? <div className="hostfinances col">
    <div className="hostfinances__top col">
      <div className="hostfinances__top_right">
        <LargeText>Recent Transactions</LargeText>
        <div className="hostfinances__top_right-bal row-fs-c">
          <span className="tag">Available balance: </span>
          <span className="text">{balance > 0 ? " $" + balance : "$0"}</span>
        </div>
      </div>
      <div className="hostfinances__top-btn row-sb-c">
        <Button kind="ext" weight="light" href={url} target="_blank">Visit Stripe Dashboard</Button>
        <ApolloConsumer>
          {client =>
            balance > 0
              ? <Button kind="primary" weight="purple" onClick={() => payout(client, props.host.id)}><span>Pay out<span style={{fontWeight: "600"}}>{" $" + balance}</span></span></Button>
              : <Button className="fade" kind="primary" weight="purple"><span>Pay out</span></Button>
          }
        </ApolloConsumer>
      </div>
      {transactions ?
        transactions.map((transaction, i) => (
          <Card key={i} transaction={transaction} payout={transaction.amount < 0}/>
        )) : null
      }
      <div style={{height: 20}} />
      <a href="mailto:providers@heymaisie.com">Something incorrect?</a>
    </div>
  </div> : <FullPageSpinner color={"dark"} />
};

const payout = async (client, hostId) => {
  await hostPayout(client, hostId);
  location.reload();
}
