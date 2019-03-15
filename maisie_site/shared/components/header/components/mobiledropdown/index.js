import { connect } from 'react-redux';
import cookie from 'cookie';
import Router from 'next/router';

var classNames = require('classnames')
function toggleDrawer(a) {
  let z = document.getElementById('mobile_head_dropdown').classList // get id for drop
  a ? z.remove('hide') : z.add('hide') // add or hide based on arg
}

const Links = (props) => [["Profile", `/profile/${props.userId}`],
                    ["Browse", "/"],
                    ["My Circles", "/circles"],
                    ["Settings", "/settings"],
                    ["Help", "/support"]].map((x, index) => <a key={index} className="row-fs-c" href={x[1]}>{x[0]}</a> )


const MobileDropdown = (props) => {
  return <div className="mobile_head_drop">
    <div
      className="mobile_head_drop_icon"
      onClick={(_) => toggleDrawer(true)}
      style={{
        backgroundImage: `url(${props.user.imageUrl || 'https://s3.amazonaws.com/maisie-files/shared/profile-default.svg'})`,
        backgroundPosition: "center",
        backgroundSize: "contain"
      }}
    />
    <div className="mobile_head_drop__drop hide" id="mobile_head_dropdown">
      <div className="mobile_head_drop__drop-top row-fe-c">
        <div
          onClick={(a) => toggleDrawer(false)}
          style={{
            backgroundImage: `url('https://s3.amazonaws.com/maisie-files/shared/x.svg')`,
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
          <Links userId={props.user.id}/>
          <div className="row-fs-c" onClick={() => handleDelete()}>Sign Out</div>
        </div>
      </div>
    </div>
  </div>
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
}
const handleDelete = () => {
  document.cookie = 'token' + `=;Path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  localStorage.removeItem('persist:nextjs');
  Router.route !== '/' ? Router.push('/') : location.reload(true);
}
export default connect(mapStateToProps)(MobileDropdown);
