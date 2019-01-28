import Header from '../shared/components/app_header/index.js';
var classNames = require('classnames');

export default (page, id, center) => {
  const c = center === true ? "col-fs-c" : null
  return(
    <div className="withPage col">
      <Header />
      <div className="withPage__inner row">
        <div className={classNames(["withPage__inner-content", c])}>{page}</div>
      </div>
    </div>
  )
}
