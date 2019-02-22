import { connect } from 'react-redux';
import cookie from 'cookie';

var classNames = require('classnames')
function toggleDrawer(a) {
  let z = document.getElementById('mobile_head_dropdown').classList // get id for drop
  a ? z.remove('hide') : z.add('hide') // add or hide based on arg
}

const Links = () => [["Edit Profile", "/profile"],
                    ["Browse", "/"],
                    ["My Circles", "/circles"],
                    ["Settings", "/settings"],
                    ["Help", "/support"]].map((x, index) => <a key={index} className="row-fs-c" href={x[1]}>{x[0]}</a> )


const MobileDropdown = (props) =>
  <div className="mobile_head_drop">
    <div
      className="mobile_head_drop_icon"
      onClick={(a) => toggleDrawer(true)}
      style={{
        backgroundImage: `url(../../../static/shared/matthew.png)`,
        backgroundPosition: "center",
        backgroundSize: "contain"
      }}
    />
    <div className="mobile_head_drop__drop hide" id="mobile_head_dropdown">
      <div className="mobile_head_drop__drop-top row-fe-c">
        <div
          onClick={(a) => toggleDrawer(false)}
          style={{
            backgroundImage: `url(../../../static/shared/x.svg)`,
            backgroundPosition: "center",
            backgroundSize: "contain"
          }}
        />
        </div>
      <div className="mobile_head_drop__drop-list col">
        <div>
          {
            props.user && props.user.role === 'host'
              ? <a className="row-fs-c" href="/panel">Host Panel</a>
              : null
          }
          <Links />
          <div className="row-fs-c" onClick={() => handleDelete()}>Sign Out</div>
        </div>
      </div>
    </div>
  </div>

const mapStateToProps = (state) => {
  return { user: state.user.user };
}
const handleDelete = () => {
  document.cookie = cookie.serialize('user', '', {
    maxAge: -1
  });
  document.cookie = cookie.serialize('token', '', {
    maxAge: -1
  });
  location.reload(true);
}
export default connect(mapStateToProps)(MobileDropdown);
