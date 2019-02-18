import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import HostHeader from '../modules/panel/hostheader/index.js';
import Dash from '../modules/panel/dash/index.js';
import Finances from '../modules/panel/finances/index.js';
import Circles from '../modules/panel/circles/index.js';
import Inbox from '../modules/panel/inbox/index.js';
import Profile from '../modules/panel/profile/index.js';
import Router from 'next/router';

export default class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: ""
    }
  }
  componentDidMount() {
    this.setState({ page: Router.query.sub != undefined ? Router.query.sub : "dash" })
  }
  render() {
    const p = this.state.page
    const activePage =
      p == "dash"
        ? <Dash />
        : p == "finances"
          ? <Finances />
          : p == "circles"
            ? <Circles />
            : p == "inbox"
              ? <Inbox />
              : p == "profile"
                ? <Profile />
                : null
    return(
      <div className="panel">
        <Header loggedIn="loggedIn"/>
        <HostHeader page={this.state.page} />
        <div className="panel__inner">{activePage}</div>
        <Footer />
      </div>
    )
  }
}
