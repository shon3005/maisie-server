import Name from './components/name.js';
import Spacer from './components/spacer.js';
import Item from './components/item.js';
import Links from './components/links.js';
import HorLinks from './components/hor_links.js';
var classNames = require('classnames')
import { connect } from 'react-redux';

const LoggedIn = (props) =>
<div className="row-fe-c">
  <HorLinks circle={props.circle} />
  <div className="headerLoggedIn row-fe-c">
    <div className="headerLoggedIn-thumb" style={{backgroundImage: "url('../../../../../static/shared/matthew.png')", backgroundSize: "cover", backgroundPosition: "contain"}} />
    <div className={classNames(["headerLoggedIn__drop", {"circle_page" : props.circle}])}>
      <div className="headerLoggedIn__drop-cover" />
      <Spacer circle={props.circle} />
      <Spacer circle={false} />
      <Name user={props.user} />
      <Spacer circle={false} />
      {
        props.user && props.user.role === 'host' ?
          <div>
            <Item text="Host Dashboard" img="../../../../../static/sidebar/circles.svg" href="/panel" />
            <Spacer circle={false} />
          </div> :
          null
      }
      <Links />
      <Spacer circle={false} />
      <Item text="Sign Out" img="" href="/" />
    </div>
  </div>
</div>

const mapStateToProps = (state) => {
  return { user: state.user.user };
}

export default connect(mapStateToProps)(LoggedIn);
