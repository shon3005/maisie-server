import JoinCircle from './components/join_circle_button.js';
// Determines what the welcome widget should say
  // set equal to 0 for normal window
  // set equal to 1 for unfinished questions
  // set equal to 2 for waiting to hear back from us
let WELCOME_POSITION = 0

export default (props) =>
  <div className="discover col-fs-c">
    <div className="discover__cta row-sb-c">
      <span>Welcome back, Wayne.</span>
      <JoinCircle pos={WELCOME_POSITION} onSignUpFlowPress={props.onSignUpFlowPress} />
    </div>
  </div>
