import {Link} from '../../../../../../../../routes';

export default (props) =>
  <Link route={props.href}>
    <div className="headerLoggedIn__drop-item large row-fs-c">
      <div className="headerLoggedIn__drop-item-tag" />
      <img src={props.img} />
      <div style={{width: 10, display: props.img ? "auto" : "none" }} />
      <span>{props.text}</span>
    </div>
  </Link>
