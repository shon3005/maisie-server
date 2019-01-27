import LOGIC_MAIN from './logic/links.js';
import SideItemLarge from './components/drop_item.js';

const MainLinks = (props) => LOGIC_MAIN.map((x, index) =>
  <SideItemLarge
    key={index}
    text={x.text}
    img={x.img}
    href={x.href}
  />
)

export default () =>
  <div className="appheader row-sb-c">
    <a href="/discover"><img src="../../static/header/logo_nocircle.svg" /></a>
    <div className="appheader__user row-fe-c">
      <div className="appheader__user-thumb" />
      <div className="appheader__user_drop">
        <div className="appheader__user_drop-name col">
          <span>Matthew Kochakian</span>
          <a>View Profile</a>
        </div>
        <div style={{width: '100%', height: 1, backgroundColor: 'rgba(5,45,84,.05)'}} />
        <SideItemLarge text="Host Panel" img="../../../static/sidebar/circles.svg" href="host" />
        <div style={{width: '100%', height: 1, backgroundColor: 'rgba(5,45,84,.05)'}} />
        <MainLinks />
        <div style={{width: '100%', height: 1, backgroundColor: 'rgba(5,45,84,.05)'}} />
        <SideItemLarge text="Sign Out" img="" href="#" />
      </div>
    </div>
  </div>

// <div className="appheader__search row-c-c">Search</div>
