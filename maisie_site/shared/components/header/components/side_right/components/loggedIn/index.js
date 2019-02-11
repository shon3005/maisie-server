import Name from './components/name.js';
import Spacer from './components/spacer.js';
import Item from './components/item.js';
import Links from './components/links.js';
import HorLinks from './components/hor_links.js';

export default (props) =>
<div className="row-fe-c">
  <HorLinks />
  <div className="headerLoggedIn row-fe-c">
    <div className="headerLoggedIn-thumb" style={{backgroundImage: "url('../../../../../static/shared/matthew.png')", backgroundSize: "cover", backgroundPosition: "contain"}} />
    <div className="headerLoggedIn__drop">
      <div className="headerLoggedIn__drop-cover" />
      <Spacer />
      <Spacer />
      <Name user={props.user ? props.user : { "firstname": "Wayne", "lastname": "Tables", }} />
      <Spacer />
      <Item text="Host Dashboard" img="../../../../../static/sidebar/circles.svg" href="/panel" />
      {/*{props.user.role === 'host' ? <SideItemLarge text="Host Dashboard" img="../../../../../static/sidebar/circles.svg" href="/panel" /> : null}*/}
      <Spacer />
      <Links />
      <Spacer />
      <Item text="Sign Out" img="" href="/" />
    </div>
  </div>
</div>
