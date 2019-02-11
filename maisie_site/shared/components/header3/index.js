// 1. you can add breadcrumbs with the prop 'status'
// 2. you can make the background transparent with the prop 'trnsp'

var classNames = require('classnames');

export default (props) =>
  <div className={classNames(["newheader", "row-fs-c", { "trnsp": props.trnsp }])}>
    <a href="/"><img src="../../static/header/logo_nocircle.svg" /></a>
    <div className="newheader-barrier" style={{display: props.status ? "flex" : "none"}} />
    <span>{props.status}</span>
  </div>
