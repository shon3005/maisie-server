import SettingsModule from '../modules/settings/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import { connect } from 'react-redux';
import cookie from 'cookie';

function Settings () {
  return (
    <div className="settings">
      <Header loggedIn="loggedIn"/>
      <SettingsModule />
      <Footer />
    </div>
  );
}

Settings.getInitialProps = async (context) => {
  try {
    if (context.req) {
      const cookies = cookie.parse(context.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(context, '/')
      }
      if (cookies.userServer) {
        return { user: cookies.userServer };
      }
    }
  } catch(e) {
    console.log(e);
  }
  return { user: undefined };
}

const mapStateToProps = (state) => {
  return process.browser ? 
    { user: state.user.user } :
    {};
}

export default connect(mapStateToProps)(Settings);