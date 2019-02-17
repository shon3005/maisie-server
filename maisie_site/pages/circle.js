// /// //// DARK THEME //// /// //
// Use the following to set a dark theme on the page.
const PREFER_DARK_THEME = false
// Caution: this should be used for featured circles only.
//
import CircleModule from '../modules/circle/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import Question from '../modules/circle/components/question.js';
import DATA from '../modules/circle/dummy_data.js';
import { connect } from 'react-redux';
import Router from 'next/router';

var classNames = require('classnames')
function Circle(props) {
  let id;
  if (process.browser) {
    id = Router.query.id
  }
  return(
    <div className={classNames("circle", {"dark_theme": PREFER_DARK_THEME})}>
      <Question />
      <Header circle loggedIn="loggedIn" />
      <CircleModule dark={PREFER_DARK_THEME} d={DATA} user={props.user} id={id} />
      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
}

export default connect(mapStateToProps)(Circle);