import React, { Component } from "react";
import { ApolloConsumer } from 'react-apollo';
import getUser from '../shared/services/get-user';
import loginUser from '../shared/services/login-user';
import redirect from '../shared/services/redirect';
import Router from 'next/router'
import { connect } from 'react-redux';
import * as actions from '../shared/services/actions';

const Error = (props) => <div className="signin__error">{props.children}</div>

class Signin extends Component {
  static async getInitialProps (context) {
    try {
      const { data } = await getUser(context.apolloClient);

      if (data.getUser && data.getUser.id) {
        redirect(context, '/')
      }
    } catch(e) {
      console.log(e);
    }
    return {}
  }

  state = {
    email: '',
    password: ''
  }

  signinUser = async (client) => {
    try {
      const { data } = await loginUser(client, this.state.email, this.state.password);

      await this.props.updateUser({
        id: data.loginUser.user.id,
        firstName: data.loginUser.user.firstName,
        lastName: data.loginUser.user.lastName,
        email: data.loginUser.user.email
      });

      await this.props.updateToken(data.loginUser.token);

      Router.push('/')
    } catch (e) {
      // show custom error
      console.log(e);
    }
  }

  handleSubmit = (client) => {
    event.preventDefault()
    this.signinUser(client);
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <div className="signin col-c-c">
            <a href="/"><img src="../static/shared/newlogo.svg"/></a>
                          <div style={{height: 20}} />
            <span className="signin-welcome">welcome back</span>
            <span className="signin-subwelcome">please sign in</span>
                          <div style={{height: 20}} />
            <form className="col-fs-c" onSubmit={(_) => this.handleSubmit(client)}>
              <input
                required
                placeholder="email address"
                type="text"
                value={this.state.email} onChange={this.handleEmailChange}
              />
                          <div style={{height: 10}} />
              <input
                required
                placeholder="password"
                type="password"
                value={this.state.password} onChange={this.handlePasswordChange}
              />
                          <div style={{height: 20}} />
              <button type="submit">
                Sign In
              </button>
              <div style={{height: 20}} />
              <a>Forgot your password?</a>
            </form>
            <Error></Error>
          </div>
        )}
      </ApolloConsumer>
    )
  }
}

export default connect(null, actions)(Signin);
