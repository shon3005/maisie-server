// // STYLING THIS HEADER:
// 1. you can add breadcrumbs with the prop 'status'
// 2. you can make the background transparent with the prop 'trnsp'
// 3. you can make the header adjust for circle pages with the prop 'circle'
import { connect } from 'react-redux';
import cookie from 'cookie';
import Left from './components/side_left.js';
import Right from './components/side_right/index.js';
import MobileDropdown from './components/mobiledropdown/index.js';

var classNames = require('classnames');

const Header = (props) =>
    <div className={classNames(["header", "row-sb-c", { "circle_page": props.circle, "trnsp": props.trnsp }])}>
      <Left circle={props.circle} />
      <div>
      <Right circle={props.circle} u={props.loggedIn} />
      {
        props.user
          ? <MobileDropdown circle={props.circle} u={props.loggedIn} />
          : <div />
      }
      </div>
    </div>

const mapStateToProps = (state) => {
  return {user: state.user.user}
}

export default connect(mapStateToProps)(Header);