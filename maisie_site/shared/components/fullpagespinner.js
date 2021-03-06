var classNames = require('classnames');
var spinnerColor = (x) => x === "purple"
  ? "spinner_white"
  : x === "light"
    ? "spinner_dark"
    : x === "dark"
      ? "spinner_purple"
      : null

export default props =>
  <div className="fullpagespinner col-c-c">
    <img src={`https://s3.amazonaws.com/maisie-files/shared/${spinnerColor(props.color)}.png`} />
  </div>
