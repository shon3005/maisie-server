import SettingsModule from '../modules/settings/index.js';
import Footer from '../shared/components/footer/index.js';
import Header from '../shared/components/header/index.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import Router from 'next/router';
import redirect from '../shared/services/redirect';

function Settings (props) {
  return (
    <div className="settings">
      <Header loggedIn="loggedIn"/>
      <SettingsModule route={props.route} user={props.user}/>
      <Footer />
    </div>
  );
}

Settings.getInitialProps = async ({ctx}) => {
  try {
    if (ctx.req) {
      const cookies = cookie.parse(ctx.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(ctx, '/')
      }
      return { route: ctx.req.path }
    } else {
      return { route: Router.route }
    }
  } catch(e) {
    console.log(e);
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps)(Settings);
