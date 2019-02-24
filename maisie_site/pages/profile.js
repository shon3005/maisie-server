import ProfileModule from '../modules/profile/profile.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';
import { connect } from 'react-redux';
import getUserProfile from '../shared/services/get-user-profile';
import { Query } from 'react-apollo';

const Profile = props => {
  const id = props.query.id;
  return(
    <div className="profile">
      <Header loggedIn="loggedIn"/>
      <Query query={getUserProfile} variables={{id}}>
        { getUserProfile => { return <ProfileModule user={getUserProfile.data.user} token={props.token} /> }}
      </Query>
      <Footer />
    </div>
  )
}

Profile.getInitialProps = (context) => {
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
  return { query: context.ctx.query, token: cookies.token };
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
}

export default connect(mapStateToProps)(Profile);
