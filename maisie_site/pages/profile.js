import ProfileModule from '../modules/profile/index.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';

const Profile = () => 
  <div className="profile">
    <Header loggedIn="loggedIn"/>
    <ProfileModule />
    <Footer />
  </div>

Profile.getInitialProps = async (context) => {
  // try {
  //   if (context.req) {
  //     const cookies = cookie.parse(context.req.headers.cookie || '');
  //     if (!cookies.token) {
  //       redirect(context, '/')
  //     }
  //     if (cookies.userServer) {
  //       return { user: cookies.userServer };
  //     }
  //   }
  // } catch(e) {
  //   console.log(e);
  // }
  // return { user: undefined };
  return { user: undefined};
}
  
  const mapStateToProps = (state) => {
    return process.browser ? 
      { user: state.user.user } :
      {};
  }
  
  export default connect(mapStateToProps)(Profile);
