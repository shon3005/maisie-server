import CreateModule from '../modules/create/index.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';

const Create = (props) => <CreateModule token={props.token} user={props.user}/>

Create.getInitialProps = ({ctx}) => {
  try {
    if (ctx.req) {
      const cookies = cookie.parse(ctx.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(ctx, '/')
      }
      return {token: cookies.token}
    } else {
      const cookies = cookie.parse(document.cookie || '')
      if (!cookies.token) {
        redirect(ctx, '/')
      }
      return {token: cookies.token}
    }
  } catch(e) {
    console.log(e);
  }
}

const mapStateToProps = (state) => {
    return {
      user: state.user.user
    }
  }
  
export default connect(mapStateToProps)(Create);