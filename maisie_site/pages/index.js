import React, { Component } from "react";
import Landing from '../modules/landing/index.js';
import Home from '../modules/home/index';
import getUser from '../shared/services/get-user';
import redirect from '../shared/services/redirect'

export default class extends Component {
  static async getInitialProps (context) {
    if (context.req.headers.cookie) {
      try {
        const { data } = await getUser(context.apolloClient);

        if (data.getUser && data.getUser.id) {
          redirect(context, '/')
        }
      } catch(e) {
        console.log(e)
      }
    }
    return {}
  }

  render() {
    return (
      <div>
        <Landing />
      </div>
    )
  }
}

// <Home onSignUpFlowPress={this.handleSignUpToggle.bind(this)} />
