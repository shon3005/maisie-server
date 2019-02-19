import ProfileModule from '../modules/profile/index.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';

const Profile = (props) => 
  <div className="profile">
    <Header loggedIn="loggedIn"/>
    <ProfileModule user={props.user} token={props.token}/>
    <Footer />
  </div>

Profile.getInitialProps = ({ctx}) => {
  try {
    if (ctx.req) {
      const cookies = cookie.parse(ctx.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(ctx, '/')
      }
    }
  } catch(e) {
    console.log(e);
  }
}
  
  const mapStateToProps = (state) => {
    return {
      user: state.user.user,
      token: state.user.token
    };
  }
  
  export default connect(mapStateToProps)(Profile);
