import ProfileModule from '../modules/profile/profile.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';
import { connect } from 'react-redux';
import getUserById from '../shared/services/get-user-profile';
import { Query } from 'react-apollo';
import cookie from 'cookie';

const Profile = props => {
  const id = props.query.id;
  return(
    <div className="profile">
      <Header loggedIn="loggedIn"/>
      <Query query={getUserById} variables={{userId: id}}>
        { getUserById => { 
          return <ProfileModule user={getUserById.data.get_user_by_id} token={props.token} />
          }
        }
      </Query>
      <Footer />
    </div>
  )
}

Profile.getInitialProps = ({ctx}) => {
  let cookies;
  if (ctx.req) {
    cookies = cookie.parse(ctx.req.headers.cookie || '');
    if (!cookies.token) {
      redirect(ctx, '/')
    }
  } else {
    cookies = cookie.parse(document.cookie || '')
    if (!cookies.token) {
      redirect(ctx, '/')
    }
  }
  return { query: ctx.query, token: cookies.token };
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps)(Profile);
