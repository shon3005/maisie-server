import Transaction from './history/components/transaction/index.js';
import DATA from './history/data.js';

const transactions = DATA.map((t, index) => <div /> )

export default () =>
<div className="hostactivity col-fs-c">
  <div className="hostactivity-title row-sb-c">
    <span>My Circles</span>
    <a href="/create" className="col-c-c">Start a Circle</a>
  </div>
  <div className="hostactivity-cont">{transactions}</div>
  <div className="hostactivity-fader" />
</div>
