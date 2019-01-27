import Top from './components/top.js';
import Schedule from './components/schedule.js';
import Payments from './components/payments.js';

export default () =>
  <div className="hostpanel col-fs-c">
    <Top />
    <div className="hostpanel-spacever" />
    <div className="hostpanel__second row-c-c">
      <Schedule />
      <div className="hostpanel-spacehor" />
      <Payments />
    </div>
  </div>
