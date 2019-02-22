var classNames = require('classnames')
export default (props) =>
  <div className="headerLoggedOut row-fe-c">
    <div className="headerLoggedOut-spacer" />
    <a href="/circles" className="headerLoggedOut-link receive_mobile_directions col-c">
      <span className={classNames({ "circle_page": props.circle })}>My Circles</span>
      <div />
    </a>
    <div className="headerLoggedOut-spacer" />
    <a href="/support" className="headerLoggedOut-link receive_mobile_directions col-c">
      <span className={classNames({ "circle_page": props.circle })}>Help</span>
      <div />
    </a>
    <div className="headerLoggedOut-spacer" />
  </div>
