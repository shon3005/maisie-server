import React, { Component } from "react";
import Landing from '../modules/landing/index.js';
import getUser from '../shared/services/get-user';
import redirect from '../shared/services/redirect'

export default class extends Component {
  static async getInitialProps (context) {
    const { userDetails } = await getUser(context.apolloClient);

    if (userDetails.id) {
      redirect(context, '/home')
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