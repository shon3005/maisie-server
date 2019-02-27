import {Link} from '../../../../routes';
var classNames = require('classnames');

export default (props) =>
<Link route={props.href}>
  <div className={classNames(["sidebar__item large", "row-fs-c", {active: props.pageToRender === props.href}])}>
    <div className={classNames(["sidebar__item-tag", { active: props.pageToRender === props.href }])} />
    <img src={props.img} />
    <span>{props.text}</span>
  </div>
</Link>
