import Header from './components/header/index.js';
import Footer from './components/footer.js';

var classNames = require('classnames');

export default (page, id, center, lim_h) => {
  const c = center === true ? "col-fs-c" : null
  return(
    <div className="withPage col">
      <Header />
      <div className={classNames(["withPage__inner", { "lim-height": lim_h }])}>
        <div className={classNames(["withPage__inner-content", c])}>{page}</div>
      </div>
      <Footer />
    </div>
  )
}