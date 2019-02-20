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
import getCircle from '../shared/services/get-circle';
import { Query } from 'react-apollo';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';

var classNames = require('classnames')
function Circle(props) {
  const id = props.query && props.query.id !== 'null' ? props.query.id : null;
  return(
    <div className={classNames("circle", {"dark_theme": PREFER_DARK_THEME})}>
      <Question />
      <OnJoinModal user={props.user} />
      <Header circle loggedIn="loggedIn" />
      {id ?
        <Query query={getCircle} variables={{id: id}}>
          {getCircleObj => {
            return <CircleModule dark={PREFER_DARK_THEME} d={DATA} user={props.user} id={id} circle={getCircleObj.data.circle}/>
          }}
        </Query> :
        null
      }
      <Footer hidemobile />
    </div>
  )
}

Circle.getInitialProps = ({ctx}) => {
  try {
    if (ctx.req) {
      const cookies = cookie.parse(ctx.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(ctx, '/')
      }
    }
    return { query: ctx.query };
  } catch(e) {
    console.log(e);
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
}

export default connect(mapStateToProps)(Circle);
