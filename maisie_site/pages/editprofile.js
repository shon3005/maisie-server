import EditProfileModule from '../modules/profile/editprofile.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer/index.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';

const Profile = (props) =>
  <div className="profile">
    <Header loggedIn="loggedIn"/>
    <EditProfileModule user={props.user} token={props.token}/>
    <Footer />
  </div>

Profile.getInitialProps = async ({ctx}) => {
  let cookies;
  if (ctx.req) {
    cookies = cookie.parse(ctx.req.headers.cookie || '');
    if (!cookies.token) {
      redirect(context, '/')
    }
  } else {
    cookies = cookie.parse(document.cookie || '');
    if (!cookies.token) {
      redirect(context, '/')
    }
  }
  return {token: cookies.token}
}

  const mapStateToProps = (state) => {
    return { user: state.user.user };
  }

  export default connect(mapStateToProps)(Profile);
