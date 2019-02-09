import Transaction from './history/components/transaction/index.js';
import DATA from './history/data.js';

const transactions = DATA.map((t, index) => <Transaction data={t} key={index} /> )

export default () =>
<div className="hostactivity col-fs-c">
  <div className="hostactivity-title row-sb-c">
    <span>My Circles</span>
    <button>Create New Circle</button>
  </div>
  <div className="hostactivity-cont">{transactions}</div>
  <div className="hostactivity-fader" />
</div>
