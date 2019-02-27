export default (props) =>
  <div className="headerLoggedIn__drop-name col">
    <span>{props.user.firstName + ' ' + props.user.lastName}</span>
    <a href="/profile">Profile</a>
  </div>
