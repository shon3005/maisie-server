import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import HostHeader from '../modules/panel/hostheader/index.js';
import Finances from '../modules/panel/finances/index.js';
import Circles from '../modules/panel/circles/index.js';
import Profile from '../modules/panel/profile/index.js';
import Modal from '../shared/components/modal/index.js';
import ProfileModal from '../modules/panel/profile/profilemodal.js';
import SetUpStripePrompt from '../modules/panel/setupstripeprompt.js';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';
import { connect } from 'react-redux';
import syncPayment from '../shared/services/sync-payment';
import { ApolloConsumer } from 'react-apollo';

//
//
const setupstripeprompt = false
const availableBalance = "500.00"
//
//

const ActivePage = (props) => {
  let p = props.p
  return setupstripeprompt
    ? p == "finances" ? <Finances availableBalance={props.availableBalance} /> :
      p == "circles" ? <Circles requests={1} /> :  
      p == "profile" ? <Profile user={props.user} /> :
      null
    : <SetUpStripePrompt />
}

const Panel = (props) => {
  let sub = props.sub ? props.sub : "finances"
  return(
    <ApolloConsumer>
      {client =>
        <div className="panel">
          <Modal id="profile_modal">
            {
              props.user && props.user.host
              ? <ProfileModal user={props.user} token={props.token}/>
              : null
            }
          </Modal>
          <Header loggedIn="loggedIn"/>
          <HostHeader page={sub} />
          <div className="panel__inner">
            <ActivePage p={sub} user={props.user} availableBalance={availableBalance} apolloClient={client}/>
          </div>
          <Footer />
        </div>
      }
    </ApolloConsumer>
  )
}

Panel.getInitialProps = ({ctx}) => {
  try {
    if (ctx.req) {
      const cookies = cookie.parse(ctx.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(ctx, '/')
      }
      if (ctx.query && ctx.query.code && ctx.query.state) {
        syncPayment(ctx.apolloClient, ctx.query.state, ctx.query.code, JSON.parse(cookies.user).user.host.id);
      }
    }
  } catch(e) {
    console.log(e)
  }
  return(ctx.query);
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    token: state.user.token
  }
}

export default connect(mapStateToProps)(Panel);
