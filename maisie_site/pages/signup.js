import React, { Component } from "react";
import SignupComponent from '../shared/components/signup';

class Signup extends Component {
  static getInitialProps = async ({ctx}) => {
    try {
      if (ctx.req) {
        return { route: ctx.req.path }
      } else {
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
