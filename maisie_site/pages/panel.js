import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import HostHeader from '../modules/panel/hostheader/index.js';
import Dash from '../modules/panel/dash/index.js';
import Finances from '../modules/panel/finances/index.js';
import Circles from '../modules/panel/circles/index.js';
import Inbox from '../modules/panel/inbox/index.js';
import Profile from '../modules/panel/profile/index.js';
import Router from 'next/router';

const ActivePage = (props) => {
  let p = props.p
  return p == "dash" ? <Dash /> : p == "finances" ? <Finances /> : p == "circles" ? <Circles /> : p == "inbox" ? <Inbox /> : p == "profile" ? <Profile /> : null
}


function Panel(props) {
  let sub = props.sub ? props.sub : "dash"
  return(
    <div className="panel">
      <Header loggedIn="loggedIn"/>
      <HostHeader page={sub} />
      <div className="panel__inner">
        <ActivePage p={sub} />
      </div>
      <Footer />
    </div>
  )
}

Panel.getInitialProps = ({ctx}) => ctx.query

export default Panel;
