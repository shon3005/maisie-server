import Card from './components/card.js';
import DATA from './components/data.js';

const cards = DATA.map((c, index) => <Card data={c} key={index} /> )

export default () =>
<div className="hostactivity col-fs-c">
  <div className="hostactivity-title row-sb-c">
    <span>My Circles</span>
    <a href="/create" className="col-c-c">Start a Circle</a>
  </div>
  <div className="hostactivity-cont">{cards}</div>
  <div className="hostactivity-fader" />
</div>
