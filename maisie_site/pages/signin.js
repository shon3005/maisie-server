import React, { Component } from "react";
import { ApolloConsumer } from 'react-apollo';
import loginUser from '../shared/services/login-user';
import Router from 'next/router'
import { connect } from 'react-redux';
import * as actions from '../shared/services/actions';
import cookie from 'cookie';

const Error = (props) => <div className="signin__error">{props.children}</div>

class Signin extends Component {
  static async getInitialProps (context) {
    // try {
    //   const { data } = await getUser(context.apolloClient);

    //   if (data.getUser && data.getUser.id) {
    //     redirect(context, '/')
    //   }
    // } catch(e) {
    //   console.log(e);
    // }
    return {}
  }

  state = {
    email: '',
    password: '',
    error: false,
  }

  signinUser = async (client) => {
    try {
      const { data } = await loginUser(client, this.state.email, this.state.password);

      document.cookie = cookie.serialize('token', data.loginUser.token, {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      });

      await this.props.updateUser(data.loginUser.user);

      Router.push('/')
    } catch (e) {
      // show custom error
      this.setState({error: e.message ? true : false})
    }
  }

  handleSubmit = (event, client) => {
    event.preventDefault()
    this.signinUser(client);
  }
  handleChange() {
    let email = document.getElementById("signin_email"), pass = document.getElementById("signin_password"), submit = document.getElementById("signin_submit")
    email.value && pass.value ? submit.classList.add('active') : submit.classList.remove('active')
  }
  handleEmailChange = (e) => {
    this.handleChange()
    this.setState({email: e.target.value});
  }
  handlePasswordChange = (e) => {
    this.handleChange()
    this.setState({password: e.target.value});
  }
  handleEnterPress() {
    let email = document.getElementById("signin_email"), pass = document.getElementById("signin_password")
    email.value ? null : email.classList.add('red');
    pass.value ? null : pass.classList.add('red');

  }
  render() {
    return (
      <ApolloConsumer>
        {client => (
            <div className="signin col-c-c">
              <a href="/"><img src="https://s3.amazonaws.com/maisie-files/shared/newlogo.svg"/></a>
                            <div style={{height: 20}} />
              <span className="signin-welcome">welcome back</span>
              <span className="signin-subwelcome">please sign in</span>
                            <div style={{height: 20}} />
              <form className="col-fs-c" onSubmit={(e) => this.handleSubmit(e, client)}>
                <input
                  required
                  id="signin_email"
                  placeholder="email address"
                  type="text"
                  value={this.state.email} onChange={this.handleEmailChange}
                />
                            <div style={{height: 10}} />
                <input
                  required
                  id="signin_password"
                  placeholder="password"
                  type="password"
                  value={this.state.password} onChange={this.handlePasswordChange}
                />
                <Error>{this.state.error ? "Error: incorrect user credentials" : null}</Error>
                <button onClick={this.handleEnterPress} id="signin_submit" type="submit">
                  Sign In
                </button>
                <div style={{height: 20}} />
                <a href="/signup">New to Maisie? Sign up</a>
              </form>
            </div>
        )}
      </ApolloConsumer>
    )
  }
}

export default connect(null, actions)(Signin);
