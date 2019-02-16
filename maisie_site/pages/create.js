import CreateModule from '../modules/create/index.js';
import { connect } from 'react-redux';

const Create = (props) => <CreateModule token={props.token} />

const mapStateToProps = (state) => {
    return {
      token: state.user.token
    }
  }
  
export default connect(mapStateToProps)(Create);