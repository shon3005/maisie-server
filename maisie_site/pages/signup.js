import React, { Component } from "react";
import SignupComponent from '../shared/components/signup';
import Router from 'next/router';

class Signup extends Component {
  static getInitialProps = async ({ctx}) => {
    try {
      if (ctx.req) {
        console.log('SERVER REQ', ctx.req);
        console.log('SERVER ROUTE', ctx.req.path);
        return { route: ctx.req.path }
      } else {
        console.log('CLIENT ROUTE', Router.route);
        return { route: Router.route }
      }
    } catch(e) {
      console.log(e);
    }
  }

  render() {
    return(
      <SignupComponent route={this.props.route}/>
    )
  }
}

export default Signup;
