import Top from './components/top.js';
import History from './components/history/index.js';
export default () =>
  <div className="hostpanel col-fs-fe">
    <Top />
    <div className="hostpanel-spacever" />
    <div className="hostpanel__bottom row">
      <History />
    </div>
  </div>
