// /// //// DARK THEME //// /// //
// Use the following to set a dark theme on the page.
const PREFER_DARK_THEME = false
// Caution: this should be used for featured circles only.
//
import Circle from '../modules/circle/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import Question from '../modules/circle/components/question.js';
import DATA from '../modules/circle/dummy_data.js';
var classNames = require('classnames')
export default function CirclePage({query}) {
  return(
    <div className={classNames("circle", {"dark_theme": PREFER_DARK_THEME})}>
      <Question />
      <Header circle />
      <Circle dark={PREFER_DARK_THEME} d={DATA} />
      <Footer />
    </div>
  )
}

CirclePage.getInitialProps = async ({query}) => {
  return {query}
}
