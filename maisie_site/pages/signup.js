import React, { Component } from "react";
var classNames = require('classnames');
import registerUser from '../shared/services/register-user';
import { ApolloConsumer } from 'react-apollo';
import { withRouter } from 'next/router';
import cookie from 'cookie';

const Error = (props) => <div className="signin__error">{props.children}</div>

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allChecked: false,
      error: '',
      $email: '',
      $firstName: '',
      $lastName: '',
      $password: '',
      $passwordConfirmation: '',
    }
  }
  // functions to check for valid entries... replace logic with backend calls if needed
  email_check = (x) => {
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(x).search (filter) != -1;
  }
  firstname_check = (x) => {
    return x.length > 0 && !parseInt(x)
  }
  lastname_check = (x) => {
    return x.length > 0 && !parseInt(x)
  }
  pass_check = (x) => {
    return x.length >= 6
  }
  listenForFilledOutFields = () => {
    return this.state.email === "success" && this.state.firstname === "success" && this.state.lastname === "success" && this.state.password === "success" && this.state.confirm === "success" && this.state.zip === "success"
  }
  confirm_check = (x) => {
    return x === this.state.$password;
  }
  handleBlur = (e, x) => {
    let f
    if (x === "email") { f = this.email_check(e) }
    else if (x === "firstname") { f = this.firstname_check(e) }
    else if (x === "lastname") { f = this.lastname_check(e) }
    else if (x === "password") { f = this.pass_check(e) }
    else if (x === "confirm") { f = this.confirm_check(e) }
    this.setState({ [x]: f ? "success" : "failure" })
  }
  handleSubmit = async (client) => {
    event.preventDefault()
    this.signupUser(client);
  }
  signupUser = async (client) => {
    try {
      const { data } = await registerUser(client, this.state.$firstName, this.state.$lastName, this.state.$email, this.state.$password, this.state.$passwordConfirmation);
      document.cookie = data ? cookie.serialize('token', data.registerUser.token, {
        maxAge: 30 * 24 * 60 * 60 // 30 days
      }) : null;
      this.props.router.push('/home')
    } catch (e) {
      // show custom error
      e.graphQLErrors ?
        e.graphQLErrors.forEach((error) => {
          this.setState({error: error.details});
        }) :
        null;
    }
  }
  render() {
    return(
      <ApolloConsumer>
        {client => (
          <div className="signupfull col-c-c">
            <div className="signupfull__inner row-c-c">
              <div className="signupfull__inner_right col-c-c">
                <img src="../static/shared/newlogo.svg"/>
                <div style={{height: 20}} />
                <span className="signupfull__inner_right-welcome">welcome to maisie</span>
                <span className="signupfull__inner_right-subwelcome">create an account</span>
                <div style={{height: 20}} />
                <form className="col-fs-c" onSubmit={(_) => this.handleSubmit(client)}>
                  <input
                    className={classNames({"fieldSuccess": this.state.email === "success", "fieldFailure": this.state.email === "failure"})}
                    required
                    onChange={(e, x) => {
                      this.handleBlur(e.target.value, "email");
                      this.setState({ $email: e.target.value });
                    }}
                    name="email"
                    placeholder="email address"
                    type="text"
                  />
                  <div style={{height: 10}} />
                  <input
                    className={classNames({"fieldSuccess": this.state.password === "success", "fieldFailure": this.state.password === "failure"})}
                    required
                    onChange={(e, x) => {
                      this.handleBlur(e.target.value, "password");
                      this.setState({ $password: e.target.value });
                    }}
                    name="password"
                    placeholder="password"
                    type="password"
                  />
                  <div style={{height: 10}} />
                  <input
                    className={classNames({"fieldSuccess": this.state.confirm === "success", "fieldFailure": this.state.confirm === "failure"})}
                    required
                    onChange={(e, x) => {
                      this.handleBlur(e.target.value, "confirm");
                      this.setState({ $passwordConfirmation: e.target.value });
                    }}
                    name="confirm"
                    placeholder="confirm password"
                    type="password"
                  />
                  <div style={{height: 10}} />
                  <div className="row">
                    <input
                      className={classNames({"fieldSuccess": this.state.firstname === "success", "fieldFailure": this.state.firstname === "failure"})}
                      onChange={(e, x) => {
                        this.handleBlur(e.target.value, "firstname");
                        this.setState({ $firstName: e.target.value });
                      }}
                      name="firstname"
                      required
                      placeholder="first name"
                      type="text"
                    />
                    <div style={{width: 10}} />
                    <input
                      className={classNames({"fieldSuccess": this.state.lastname === "success", "fieldFailure": this.state.lastname === "failure"})}
                      onChange={(e, x) => {
                        this.handleBlur(e.target.value, "lastname");
                        this.setState({ $lastName: e.target.value });
                      }}
                      name="lastname"
                      required
                      placeholder="last name"
                      type="text"
                    />
                  </div>
                  <div style={{height: 20}} />
                  <button type="submit">
                    Sign Up
                  </button>
                </form>
                <div style={{height: 20}} />
                <a className="signuplink" href="/signin">Already have an account?</a>
                <Error>{this.state.error}</Error>
              </div>
            </div>
          </div>
        )}
      </ApolloConsumer>
    )
  }
}

export default withRouter(Signup);