import SupportModule from '../modules/support/index.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';

const Support = (props) =>
<div className="support col-fs-c">
  <Header loggedIn="loggedIn"/>
  <SupportModule phone={props.user.phone}/>
  <Footer />
</div>

Support.getInitialProps = ({ctx}) => {
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
  return { user: state.user.user };
}

export default connect(mapStateToProps)(Support);
