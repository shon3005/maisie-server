import React, { Component } from "react";
import SignupComponent from '../shared/components/signup';
import Router from 'next/router';
import GaWrapper from '../shared/ga_wrapper.js';

class Signup extends Component {
  render() {
    return(
      <GaWrapper>
        <SignupComponent/>
      </GaWrapper>
    )
  }
}

export default Signup;
