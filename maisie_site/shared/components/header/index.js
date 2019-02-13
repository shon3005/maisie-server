// // STYLING THIS HEADER:
// 1. you can add breadcrumbs with the prop 'status'
// 2. you can make the background transparent with the prop 'trnsp'

import Left from './components/side_left.js';
import Right from './components/side_right/index.js';
var classNames = require('classnames');

export default (props) =>
  <div className={classNames(["header", "row-sb-c", { "trnsp": props.trnsp }])}>
    <Left />
    <Right user={props.user} u={"loggedIn"} />
  </div>
