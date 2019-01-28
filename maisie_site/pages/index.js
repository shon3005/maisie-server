import React, { Component } from "react";
import Landing from '../modules/landing/index.js';
import getUser from '../shared/services/get-user';
import { ApolloConsumer } from 'react-apollo'
// import Router from 'next/router'

export default class extends Component {
  // static async getInitialProps (context) {
  //   const { userDetails } = await getUser(context.apolloClient)

  //   // if (!loggedInUser.user) {
  //   //   // If not signed in, send them somewhere more useful
  //   //   redirect(context, '/signin')
  //   // }

  //   return { userDetails }
  // }

  checkLoggedIn = (client) => {
    getUser(client);
    // const result = await getUser(client)
    // console.log(result);
    // result.getUser.id ? Router.replace('/') : Router.replace('/signin')
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div>
            {this.checkLoggedIn(client)}
            <Landing />
          </div>
        )}
      </ApolloConsumer>
    )
  }
}