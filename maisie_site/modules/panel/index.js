import Top from './components/top.js';
// import Schedule from './components/schedule.js';
// import Payments from './components/payments.js';
import History from './components/history/index.js';

export default () =>
  <div className="hostpanel col">
    <Top />
    <div className="hostpanel-spacever" />
    <History />
  </div>
