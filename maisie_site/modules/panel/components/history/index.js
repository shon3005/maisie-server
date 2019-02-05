import Transaction from './components/transaction/index.js';
import DATA from './data.js';

const transactions = DATA.map((t, index) => <Transaction data={t} key={index} /> )

export default () =>
  <div className="hosthistory col-fs-c">
    <div className="hosthistory-title">Recent Activity</div>
    <div className="hosthistory-cont">{transactions}</div>
    <div className="hosthistory-fader" />
  </div>
