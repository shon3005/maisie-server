import React, { Component } from "react";
import { ApolloConsumer } from 'react-apollo';
import cookie from 'cookie';
import getUser from '../shared/services/get-user';
import loginUser from '../shared/services/login-user';
import redirect from '../shared/services/redirect';
import { withRouter } from 'next/router'

const Error = (props) => <div className="signin__error">{props.children}</div>

class Signin extends Component {
  static async getInitialProps (context) {
    const { userDetails } = await getUser(context.apolloClient);

    if (userDetails.id) {
      redirect(context, '/home')
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
      document.cookie = data ? cookie.serialize('token', data.loginUser.token, {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      }) : null;
      this.props.router.push('/home')
    } catch (e) {
      // show custom error
    }
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

export default withRouter(Signin);
