import Card from './components/card.js';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import getUserById from '../../../../../../shared/services/get-user-profile';

const Cards = (props) => {
  return <Query query={getUserById} variables={{ userId: props.user.id }}>
    {getUserById => {
        const user = getUserById && getUserById.data && getUserById.data.getUserById ? getUserById.data.getUserById : null;
        return user && user.members && user.members.length > 0 ? user.members.map((m, index) => <Card user={user} data={m.circle} key={index} /> ) : null;
      }
    }
  </Query>
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(mapStateToProps)(Cards);

