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
    <div className="appheader__user row-c-c">
      <span>Wayne Tables</span>
      <div className="appheader__user-thumb" />
      <div className="appheader__user_drop">
        <MainLinks />
      </div>
    </div>
  </div>

// <div className="appheader__search row-c-c">Search</div>
