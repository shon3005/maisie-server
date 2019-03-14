// /// //// DARK THEME //// /// //
// Use the following to set a dark theme on the page.
const PREFER_DARK_THEME = false
// Caution: this should be used for featured circles only.
/* added payment? */ let addedPayment = false;
//
import CircleModule from '../modules/circle/index.js';
import Footer from '../shared/components/footer/index.js';
import Header from '../shared/components/header/index.js';
import DATA from '../modules/circle/dummy_data.js';
import { connect } from 'react-redux';
import getUserAndCircle from '../shared/services/get-user-and-circle';
import { Query } from 'react-apollo';
import * as actions from '../shared/services/actions';

var classNames = require('classnames')

const Circle = (props) => {
  const circle_id = props.query && props.query.id !== 'null' ? props.query.id : null;
  const user_id = props.user && props.user.id ? props.user.id : null;
  return(
      <div className={classNames("circle", {"dark_theme": PREFER_DARK_THEME})}>
        <Header needToAddPayment={props.user && !props.user.last4} circle loggedIn={props.user ? 'loggedIn' : 'loggedOut'} />
        {circle_id ?
          <Query query={getUserAndCircle} variables={{circleId: circle_id, userId: user_id}}>
            {getUserAndCircle => {
              return getUserAndCircle.data && getUserAndCircle.data.UserAndCircle ? <CircleModule dark={PREFER_DARK_THEME} d={DATA} host={getUserAndCircle.data.UserAndCircle.circle.user.host} user={getUserAndCircle.data.UserAndCircle.user} id={circle_id} circle={getUserAndCircle.data.UserAndCircle.circle} updateUser={props.updateUser}/> : null;
            }}
          </Query> :
          null
        }
        <Footer hidemobile />
      </div>
  )
}

Circle.getInitialProps = ({ctx}) => {
  return { query: ctx.query };
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
}

export default connect(mapStateToProps, actions)(Circle);
