import LoggedIn from './components/loggedIn/index.js';
import LoggedOut from './components/loggedOut.js';

export default props =>
  props.u === "loggedIn"
  ? <LoggedIn circle={props.circle} />
  : props.u === "loggedOut"
    ? <LoggedOut user={props.user} circle={props.circle} />
    : null
