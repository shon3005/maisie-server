import Top from './components/top.js';
import Activity from './components/activity.js';
// import Schedule from './components/schedule.js';
// import Payments from './components/payments.js';
import History from './components/history/index.js';

export default () =>
  <div className="hostpanel col-fs-fe">
    <Top />
    <div className="hostpanel-spacever" />
    <div className="hostpanel__bottom row">
      <Activity />
      <History />
    </div>
  </div>
