import {Link} from '../../../../../../../../routes';
import cookie from 'cookie';

export default (props) =>
  <Link route={props.href}>
    <div className="headerLoggedIn__drop-item large row-fs-c" onClick={() => deleteSession(props.text)}>
      <div className="headerLoggedIn__drop-item-tag" />
      <img src={props.img} />
      <div style={{width: 10, display: props.img ? "auto" : "none" }} />
      <span>{props.text}</span>
    </div>
  </Link>

const deleteSession = (event) => {
  if (process.browser && event === 'Sign Out') handleDelete()
}

const handleDelete = () => {
  document.cookie = cookie.serialize('user', '', {
    maxAge: -1
  });
  location.reload(true);
}
