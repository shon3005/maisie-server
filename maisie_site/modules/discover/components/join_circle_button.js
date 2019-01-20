var classNames = require('classnames');

export default (props) =>
  <div className={classNames(["join_circle_button col-c-c", {
    normal: props.pos === 0,
    in_progress: props.pos === 1,
    awaiting: props.pos === 2
  }])}>
    <span className="prim">Join a new Circle</span>
    <span className="sec">Return to saved progress</span>
  </div>
