import CreateModule from '../modules/create/index.js';
import { connect } from 'react-redux';

const Create = (props) => <CreateModule token={props.token} user={props.user}/>

const mapStateToProps = (state) => {
    return {
      token: state.user.token,
      user: state.user.user
    }
  }
  
export default connect(mapStateToProps)(Create);