import {Link} from '../../../../routes';

export default (props) =>
<Link route={props.href}>
  <div className="appheader__user_drop-item large row-fs-c">
    <div className="appheader__user_drop-item-tag" />
    <img src={props.img} />
    <span>{props.text}</span>
  </div>
</Link>
