import React, { Component } from "react";
import Landing from '../modules/landing/index.js';
import Home from '../modules/home/index';
import getUser from '../shared/services/get-user';

export default class extends Component {
  static async getInitialProps (context) {
    if (context.req.headers.cookie) {
      try {
        const { data } = await getUser(context.apolloClient);

        if (data.getUser && data.getUser.id) {
          return { user: data.getUser };
        }
      } catch(e) {
        console.log(e);
      }
    }
    return { user: undefined };
  }

  constructor(props) {
    super(props)
    this.state = { inSignUpFlow: false }
  }
  handleSignUpToggle() {
    this.setState({ inSignUpFlow: !this.state.inSignUpFlow })
  }

  render() {
    return (
      <div>
        {this.props.user ? <Home onSignUpFlowPress={this.handleSignUpToggle.bind(this)} user={this.props.user}/> : <Landing />}
      </div>
    )
  }
}
