var classNames = require('classnames')
export default (props) =>
  <div className={classNames([{"onlanding": !props.user}, "headerLoggedOut", "row-fe-c"])}>
    <a href="/support" className="headerLoggedOut-link receive_mobile_directions col-c">
      <span className={classNames({ "circle_page": props.circle })}>Help</span>
      <div />
    </a>
    <div className="headerLoggedOut-spacer" />
    <a href="mailto:say@heymaisie.com" className="headerLoggedOut-link col-c">
      <span className={classNames({ "circle_page": props.circle })}>Are you an employer?</span>
      <div />
    </a>
    <div className="headerLoggedOut-spacer" />
    <a href="/signin" className="headerLoggedOut-link col-c">
      <span className={classNames({ "circle_page": props.circle })}>Sign In</span>
      <div />
    </a>
    <div className="headerLoggedOut-spacer" />
    <a href="/signup" className="headerLoggedOut-link col-c">
      <span className={classNames({ "circle_page": props.circle })}>Sign Up</span>
      <div />
    </a>
  </div>
