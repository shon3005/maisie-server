import Card from './components/card.js';
import { Query } from 'react-apollo';
import getCircles from '../../../../../../shared/services/get-circles';
import { connect } from 'react-redux';

const Cards = (props) => {
  return <Query query={getCircles} variables={{ userId: props.user.id }}>
    {getCircles => {
        return getCircles.data.userCircles.map((c, index) => <Card user={props.user} data={c} key={index} /> )
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

