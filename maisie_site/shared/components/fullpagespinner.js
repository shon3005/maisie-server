var classNames = require('classnames');
export default props =>
  <div className="fullpagespinner col-c-c">
    <div className={classNames(["col-c-c", {
      "purple": props.color === "purple",
      "light": props.color === "light",
      "dark": props.color === "dark",
    }])}>
      <div />
    </div>
  </div>
