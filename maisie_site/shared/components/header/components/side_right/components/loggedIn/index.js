import Name from './components/name.js';
import Spacer from './components/spacer.js';
import Item from './components/item.js';
import Links from './components/links.js';
import HorLinks from './components/hor_links.js';
var classNames = require('classnames')
export default (props) =>
<div className="row-fe-c">
  <HorLinks circle={props.circle} />
  <div className="headerLoggedIn row-fe-c">
    <div className="headerLoggedIn-thumb" style={{backgroundImage: "url('../../../../../static/shared/matthew.png')", backgroundSize: "cover", backgroundPosition: "contain"}} />
    <div className={classNames(["headerLoggedIn__drop", {"circle_page" : props.circle}])}>
      <div className="headerLoggedIn__drop-cover" />
      <Spacer circle={props.circle} />
      <Spacer circle={false} />
      <Name user={props.user ? props.user : { "firstname": "Wayne", "lastname": "Tables", }} />
      <Spacer circle={false} />
      <Item text="Host Dashboard" img="../../../../../static/sidebar/circles.svg" href="/panel/dash" />
      {/*{props.user.role === 'host' ? <SideItemLarge text="Host Dashboard" img="../../../../../static/sidebar/circles.svg" href="/panel" /> : null}*/}
      <Spacer circle={false} />
      <Links />
      <Spacer circle={false} />
      <Item text="Sign Out" img="" href="/" />
    </div>
  </div>
</div>
