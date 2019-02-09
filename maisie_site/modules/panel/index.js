import Top from './components/top.js';
import Activity from './components/activity.js';
import History from './components/history/index.js';

export default () =>
  <div className="hostpanel col-fs-fe">
    <Top />
    <div className="hostpanel-spacever" />
    <div className="hostpanel__bottom row">
      <Activity />
      <div className="hostpanel-spacehor" />
      <History />
    </div>
  </div>
