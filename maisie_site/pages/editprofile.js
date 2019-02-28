import EditProfileModule from '../modules/profile/editprofile.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';

const Profile = (props) =>
  <div className="profile">
    <Header loggedIn="loggedIn"/>
    <EditProfileModule user={props.user}/>
    <Footer />
  </div>

Profile.getInitialProps = async (context) => {
  if (context.req) {
    const cookies = cookie.parse(context.req.headers.cookie || '');
    if (!cookies.token) {
      redirect(context, '/')
    }
  }
}

  const mapStateToProps = (state) => {
    return { user: state.user.user };
  }

  export default connect(mapStateToProps)(Profile);
