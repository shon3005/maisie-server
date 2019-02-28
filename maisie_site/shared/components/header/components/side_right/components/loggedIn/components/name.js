export default (props) =>
  <div className="headerLoggedIn__drop-name col">
    <span>{props.user.firstName + ' ' + props.user.lastName}</span>
    <a href={`/profile/${props.user.id}`}>Profile</a>
  </div>
