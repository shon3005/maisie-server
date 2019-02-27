import {Link} from '../../../../routes';
var classNames = require('classnames');

export default (props) =>
<Link route={`circles`} as={`circles/${props.id}`} params={{id: props.id}}>
  <div className={classNames(["sidebar__item small", "row-fs-c", {active: props.pageToRender === props.href}])}>
    <div className={classNames(["sidebar__item-tag", { active: props.id === props.circle }])} />
    <div className="sidebar__item-imgc" />
    <span>{props.text}</span>
  </div>
</Link>
