import ProfileModule from '../modules/profile/profile.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';
import getUserProfile from '../shared/services/get-user-profile';
import { Query } from 'react-apollo';

const Profile = props => {
  const id = props.query.id;
  return(
    <div className="profile">
      <Header loggedIn="loggedIn"/>
      <Query query={getUserProfile} variables={{id}}>
        { getUserProfile => { return <ProfileModule user={getUserProfile.data.user} /> }}
      </Query>
      <Footer />
    </div>
  )
}

Profile.getInitialProps = async (context) => {
  return { query: context.ctx.query };
}

const mapStateToProps = (state) => {
  return process.browser ?
    { user: state.user.user } :
    {};
}

export default connect(mapStateToProps)(Profile);
