import React, { Component } from "react";
import registerUser from '../shared/services/register-user';
import { withRouter } from 'next/router';
import cookie from 'cookie';
import SignupComponent from '../shared/components/signup';

class Signup extends Component {
  render() {
    return(
      <SignupComponent />
    )
  }
}

export default withRouter(Signup);
