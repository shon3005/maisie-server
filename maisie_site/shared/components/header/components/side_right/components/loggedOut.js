var classNames = require('classnames')
export default (props) =>
  <div className="headerLoggedOut row-fe-c">
    <a href="/support" className="headerLoggedOut-link col-c">
      <span className={classNames({ "circle_page": props.circle })}>Help</span>
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
