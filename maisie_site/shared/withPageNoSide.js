import Header from './components/app_header/index.js';
import Footer from './components/footer.js';

var classNames = require('classnames');

export default (page, id, center) => {
  const c = center === true ? "col-fs-c" : null
  return(
    <div className="withPage col">
      <Header />
      <div className="withPage__inner">
        <div className={classNames(["withPage__inner-content", c])}>{page}</div>
      </div>
      <Footer />
    </div>
  )
}
