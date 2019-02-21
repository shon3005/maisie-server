import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import HostHeader from '../modules/panel/hostheader/index.js';
import Dash from '../modules/panel/dash/index.js';
import Finances from '../modules/panel/finances/index.js';
import Circles from '../modules/panel/circles/index.js';
import Inbox from '../modules/panel/inbox/index.js';
import Profile from '../modules/panel/profile/index.js';
import Modal from '../shared/components/modal/index.js';
import ProfileModal from '../modules/panel/profile/profilemodal.js';
import Router from 'next/router';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';
import { connect } from 'react-redux';

const ActivePage = (props) => {
  let p = props.p
  return p == "dash" ? <Dash /> : p == "finances" ? <Finances /> : p == "circles" ? <Circles /> : p == "inbox" ? <Inbox /> : p == "profile" ? <Profile user={props.user} /> : null
}

function Panel(props) {
  let sub = props.sub ? props.sub : "finances"
  return(
    <div className="panel">
      <Modal id="profile_modal">
        {
          props.user && props.user.host
          ? <ProfileModal user={props.user} />
          : null
        }
      </Modal>
      <Header loggedIn="loggedIn"/>
      <HostHeader page={sub} />
      <div className="panel__inner">
        <ActivePage p={sub} user={props.user} />
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
