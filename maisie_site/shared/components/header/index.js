// // STYLING THIS HEADER:
// 1. you can add breadcrumbs with the prop 'status'
// 2. you can make the background transparent with the prop 'trnsp'
// 3. you can make the header adjust for circle pages with the prop 'circle'

import Left from './components/side_left.js';
import Right from './components/side_right/index.js';
var classNames = require('classnames');

export default (props) =>
  <div className={classNames(["header", "row-sb-c", { "circle_page": props.circle, "trnsp": props.trnsp }])}>
    <Left circle={props.circle} />
    <Right circle={props.circle} u={props.loggedIn} />
  </div>
