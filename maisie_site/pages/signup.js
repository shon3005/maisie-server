import React, { Component } from "react";
import { withRouter } from 'next/router';
import SignupComponent from '../shared/components/signup';

class Signup extends Component {
  render() {
    return(
      <SignupComponent />
    )
  }
}

export default withRouter(Signup);
