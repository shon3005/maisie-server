import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import HostHeader from '../modules/panel/hostheader/index.js';
import Finances from '../modules/panel/finances/index.js';
import Circles from '../modules/panel/circles/index.js';
import Profile from '../modules/panel/profile/index.js';
import Modal from '../shared/components/modal/index.js';
import ProfileModal from '../modules/panel/profile/profilemodal.js';
import SetUpStripePrompt from '../modules/panel/setupstripeprompt.js';
import Router from 'next/router';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';
import { connect } from 'react-redux';

//
//
const setupstripeprompt = true
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
        <ActivePage p={sub} user={props.user} availableBalance={availableBalance} />
      </div>
      <Footer />
    </div>
  )
}

Panel.getInitialProps = ({ctx}) => {
  try {
    if (ctx.req) {
      const cookies = cookie.parse(ctx.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(ctx, '/')
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
