import LoggedIn from './components/loggedIn/index.js';
import LoggedOut from './components/loggedOut.js';

export default (props) =>
  props.u === "loggedIn"
  ? <LoggedIn user={props.user} />
  : props.u === "loggedOut"
    ? <LoggedOut />
    : <div />
