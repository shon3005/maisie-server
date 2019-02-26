// /// //// DARK THEME //// /// //
// Use the following to set a dark theme on the page.
const PREFER_DARK_THEME = false
// Caution: this should be used for featured circles only.
//
import CircleModule from '../modules/circle/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import DATA from '../modules/circle/dummy_data.js';
import { connect } from 'react-redux';
import getCircle from '../shared/services/get-circle';
import { Query } from 'react-apollo';

var classNames = require('classnames')

function Circle(props) {
  const id = props.query && props.query.id !== 'null' ? props.query.id : null;
  return(
    <div className={classNames("circle", {"dark_theme": PREFER_DARK_THEME})}>
      <Header circle loggedIn={props.user ? 'loggedIn' : 'loggedOut'} />
      {id ?
        <Query query={getCircle} variables={{id: id}}>
          {getCircleObj => {
            return getCircleObj.data.circle ? <CircleModule dark={PREFER_DARK_THEME} d={DATA} host={getCircleObj.data.circle.user.host} user={props.user} id={id} circle={getCircleObj.data.circle}/> : null;
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

export default connect(mapStateToProps)(Circle);
