import LOGIC_MAIN from './logic/links.js';
import SideItemLarge from './components/drop_item.js';
import {Link} from '../../../routes';

var classNames = require('classnames');

const MainLinks = (props) => LOGIC_MAIN.map((x, index) =>
  <SideItemLarge
    key={index}
    text={x.text}
    img={x.img}
    href={x.href}
  />
)

const LoggedInNonApp = (props) =>
  <div className="appheader__user row-fe-c">
      <a href="/"><span className={classNames({
        "purple": !props.whitelogo,
        "white": props.whitelogo,
        "appheader__user-nonApp": true,
      })} style={props.whitelogo ? {color: "white"} : {color: 'rgba(118,146,255,1)'}}>Go to Dashboard →</span></a>
  </div>

const LoggedInApp = () =>
  <div className="appheader__user row-fe-c">
    <div className="appheader__user-thumb"><img src="../../../static/shared/matthew.png" /></div>
    <div className="appheader__user_drop">
      <div className="appheader__user_drop-cover" />
      <div className="appheader__user_drop-name col">
        <span>Matthew Kochakian</span>
        <a href="/profile">Edit Profile</a>
      </div>
      <div style={{width: '100%', height: 1, backgroundColor: 'rgba(5,45,84,.05)'}} />
      <SideItemLarge text="Host Panel" img="../../../static/sidebar/circles.svg" href="/panel" />
      <div style={{width: '100%', height: 1, backgroundColor: 'rgba(5,45,84,.05)'}} />
      <MainLinks />
      <div style={{width: '100%', height: 1, backgroundColor: 'rgba(5,45,84,.05)'}} />
      <SideItemLarge text="Sign Out" img="" href="#" />
      <div style={{width: '100%', height: 1, backgroundColor: 'rgba(5,45,84,.05)'}} />

      <SideItemLarge text="Sign In TEST" img="" href="signin" />
      <SideItemLarge text="Sign Up TEST" img="" href="signup" />
    </div>
  </div>

export default (props) => {
  const rightside = props.non_app ? <LoggedInNonApp whitelogo={props.whitelogo} /> : <LoggedInApp />;
  return(
  <div className="appheader row-sb-c" style={ props.noheader ? {} : {backgroundColor: "rgba(255,255,255,1)", boxShadow: "0px 0px 2px rgba(5,45,84,.10)"}}>
    <a href={props.non_app ? "/" : "/"}>
      <img
        src={props.whitelogo ? "../../static/header/logo_nocircle_white.svg" : "../../static/header/logo_nocircle.svg"}
        style={props.whitelogo ? {marginTop: -18, marginLeft: -20} : {}}
      />
    </a>
    {rightside}
  </div>
  )
}
// <div className="appheader__search row-c-c">Search</div>
