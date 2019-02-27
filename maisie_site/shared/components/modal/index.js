import SmallText from '../text/smallText.js';
var classNames = require('classnames');

export default (props) =>
  <div
    id={props.id}
    className={classNames(["hide", "modal", "col-c-c", props.className])}
  >
    <div className="col">
      {props.children}
    </div>
  </div>
