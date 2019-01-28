import React, { Component } from "react";
import { ApolloConsumer } from 'react-apollo';
import cookie from 'cookie';
import loginUser from '../shared/services/login-user';

const Error = (props) => <div className="signin__error">{props.children}</div>

export default class extends Component {
  state = {
    email: '',
    password: ''
  }

  signinUser = async (client) => {
    const response = await loginUser(client, this.state.email, this.state.password);
    document.cookie = cookie.serialize('token', response.data.loginUser.token, {
      maxAge: 30 * 24 * 60 * 60 // 30 days
    })
  }
  
  handleSubmit = async (client) => {
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
            <img src="../static/shared/newlogo.svg"/>
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
