import React, { Component } from "react";
var classNames = require('classnames');

// functions to check for valid entries... replace logic with backend calls if needed
function email_check(x) {
  var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  return String(x).search (filter) != -1;
}
function firstname_check(x) {
  return x.length > 0 && !parseInt(x)
}
function lastname_check(x) {
  // insert logic
  return x.length > 0 && !parseInt(x)
}
function pass_check(x) {
  // insert logic
  return x.length >= 6
}
function confirm_check(x) {
  return x.length > 0
}
function zip_check(x) {
  // insert logic
  return x.length === 5 && parseInt(x)
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignup: true,
      allChecked: false,
      $firstName: '',
      $lastName: '',
      $email: props.email,
      $password: '',
      $passwordConfirmation: '',
      $zip: ''
    }
  }
  componentDidMount() {
    if (this.props.email.length > 0 && this.props.email != " ") { this.handleBlur(this.props.email, "email") }
    this.nameInput.focus();
  }
  listenForFilledOutFields() {
    return this.state.email === "success" && this.state.firstname === "success" && this.state.lastname === "success" && this.state.password === "success" && this.state.confirm === "success" && this.state.zip === "success"
  }
  handleZipChange(e) {
    if (e.length === 5) {
      let f = zip_check(e)
      this.setState({ zip: f ? "success" : "failure" })
    } else {
      this.setState({ zip: "" })
    }
  }

  handleBlur(e, x) {
    let f
    if (x === "email") { f = email_check(e) }
    else if (x === "firstname") { f = firstname_check(e) }
    else if (x === "lastname") { f = lastname_check(e) }
    else if (x === "password") { f = pass_check(e) }
    else if (x === "confirm") { f = confirm_check(e) }
    else if (x === "zip") { f = zip_check(e) }
    this.setState({ [x]: f ? "success" : "failure" })
  }
  render() {
    return(
      <div className="col-c-c">
        <div className="signup__main_in col-fs-c">
          <div className="row">
            <img className="signup_logo" src="../../../../static/shared/icon.svg" />
            <img className="signup_wordmark" src="../../../../static/shared/wordmark.svg" />
          </div>
          <span className="signup__main_in-title">Sign Up</span>
        </div>
        <form className="signup__main__form col" onSubmit={(e) => {
          this.props.onSubmit({
            firstName: this.state.$firstName,
            lastName: this.state.$lastName,
            email: this.state.$email,
            password: this.state.$password,
            passwordConfirmation: this.state.$passwordConfirmation
          })
        }}>
          <div className="signup__main__form-half row-sb">
            <div className="col">
              <input
                className={classNames(["form_field", {"fieldSuccess": this.state.firstname === "success", "fieldFailure": this.state.firstname === "failure"}])}
                type="text"
                onBlur={(e, x) => this.handleBlur(e.target.value, "firstname")}
                placeholder="Wayne"
                name="firstname"
                ref={(input) => {
                  this.nameInput = input
                }}
                onChange={(e) => this.setState({$firstName: e.target.value})}
              />
              <div className="form_tag">FIRST NAME:</div>
            </div>
            <div className="col">
              <input
                className={classNames(["form_field", {"fieldSuccess": this.state.lastname === "success", "fieldFailure": this.state.lastname === "failure"}])}
                type="text"
                onBlur={(e, x) => this.handleBlur(e.target.value, "lastname")}
                placeholder="Tables"
                name="lastname"
                onChange={(e) => this.setState({$lastName: e.target.value})}
              />
              <div className="form_tag">LAST NAME:</div>
            </div>
          </div>
          <div className="signup__main__form-full col">
            <input
              className={classNames(["form_field", {"fieldSuccess": this.state.email === "success", "fieldFailure": this.state.email === "failure"}])}
              type="text"
              onBlur={(e, x) => this.handleBlur(e.target.value, "email")}
              placeholder="waynetables@gmail.com"
              name="email"
              defaultValue={this.props.email && this.props.email != " " ? this.props.email : null}
              onChange={(e) => this.setState({$email: e.target.value})}
            />
            <div className="form_tag">EMAIL:</div>
          </div>
          <div className="signup__main__form-half row-sb">
            <div className="col">
              <input
                className={classNames(["form_field", {"fieldSuccess": this.state.password === "success", "fieldFailure": this.state.password === "failure"}])}
                type="password"
                onBlur={(e, x) => this.handleBlur(e.target.value, "password")}
                name="password"
                onChange={(e) => this.setState({$password: e.target.value})}
              />
              <div className="form_tag">PASSWORD:</div>
            </div>
            <div className="col">
              <input
                className={classNames(["form_field", {"fieldSuccess": this.state.confirm === "success", "fieldFailure": this.state.confirm === "failure"}])}
                type="password"
                onBlur={(e, x) => this.handleBlur(e.target.value, "confirm")}
                name="confirm"
                onChange={(e) => this.setState({$passwordConfirmation: e.target.value})}
              />
              <div className="form_tag">CONFIRM PASSWORD:</div>
            </div>
          </div>
          <div className="signup__main__form-full col">
            <input
              className={classNames(["form_field", {"fieldSuccess": this.state.zip === "success", "fieldFailure": this.state.zip === "failure"}])}
              onChange={(e) => this.handleZipChange(e.target.value)}
              type="text"
              onBlur={(e, x) => this.handleBlur(e.target.value, "zip")}
              placeholder="10001"
              name="zip"
              onChange={(e) => this.setState({$zip: e.target.value})}
            />
            <div className="form_tag">ZIP CODE:</div>
          </div>
          <button
            className={classNames(["signup__main__form-button", {
              "button_available": this.listenForFilledOutFields()
            }])}
            type="submit"
            disabled={!this.listenForFilledOutFields()}
          >Submit</button>
        </form>
      </div>
    )
  }
}
