// /// //// DARK THEME //// /// //
// Use the following to set a dark theme on the page.
const PREFER_DARK_THEME = false
// Caution: this should be used for featured circles only.
//
import CircleModule from '../modules/circle/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import Question from '../modules/circle/components/question.js';
import OnJoinModal from '../modules/circle/components/onjoinmodal.js';
import DATA from '../modules/circle/dummy_data.js';
import { connect } from 'react-redux';
import Router from 'next/router';
import getCircle from '../shared/services/get-circle';
import { Query } from 'react-apollo';

var classNames = require('classnames')
function Circle(props) {
  const id = props.query.id;
  return(
    <div className={classNames("circle", {"dark_theme": PREFER_DARK_THEME})}>
      <Question />
      <OnJoinModal user={props.user} />
      <Header circle loggedIn="loggedIn" />
      <Query query={getCircle} variables={{id}}>
        {getCircle => {
          return <CircleModule dark={PREFER_DARK_THEME} d={DATA} user={props.user} id={id} circle={getCircle.data.circle}/>
        }}
      </Query>
      <Footer />
    </div>
  )
}

Circle.getInitialProps = async (context) => {
  return {query: context.ctx.query};
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
}

export default connect(mapStateToProps)(Circle);
