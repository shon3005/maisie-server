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
      $email: this.props.email,
      $firstName: '',
      $lastName: '',
      $zip: '',
      $password: '',
      $passwordConfirmation: '',
    }
  }
  componentDidMount() {
    if (this.props.email.length > 0 && this.props.email != " ") { this.handleBlur(this.props.email, "email") }
    this.nameInput.focus();
  }
  listenForFilledOutFields() {
    return this.state.email === "success" && this.state.firstname === "success" && this.state.lastname === "success" && this.state.password === "success" && this.state.confirm === "success" && this.state.zip === "success"
  }
  // handleZipChange(e) {
  //   if (e.length === 5) {
  //     let f = zip_check(e)
  //     this.setState({ zip: f ? "success" : "failure" })
  //   } else {
  //     this.setState({ zip: "" })
  //   }
  // }

  confirm_check(x) {
    return x === this.refs.password.value
  }

  handleBlur(e, x) {
    let f
    if (x === "email") { f = email_check(e) }
    else if (x === "firstname") { f = firstname_check(e) }
    else if (x === "lastname") { f = lastname_check(e) }
    else if (x === "password") { f = pass_check(e) }
    else if (x === "confirm") { f = this.confirm_check(e) }
    else if (x === "zip") { f = zip_check(e) }
    this.setState({ [x]: f ? "success" : "failure" })
  }
  render() {
    return(
      <div className="col-c-c">
        <div className="signup__main_in col-fs-c">
          <div className="row">
            <img className="signup_logo" src="https://s3.amazonaws.com/maisie-files/shared/icon.svg" />
            <img className="signup_wordmark" src="https://s3.amazonaws.com/maisie-files/shared/wordmark.svg" />
          </div>
          <span className="signup__main_in-title">Sign Up</span>
        </div>
        <div className="signup__main__wrap">
          <form className="signup__main__wrap__form col" onSubmit={(e) => {
            this.props.onSubmit({
              firstName: this.state.$firstName,
              lastName: this.state.$lastName,
              email: this.state.$email,
              zip: this.state.$zip,
              password: this.state.$password,
              passwordConfirmation: this.state.$passwordConfirmation
            })
          }}>
            <div className="signup__main__wrap__form-half row-sb">
              <div className="col">
                <input
                  className={classNames(["form_field", {"fieldSuccess": this.state.firstname === "success", "fieldFailure": this.state.firstname === "failure"}])}
                  type="text"
                  onChange={(e, x) => {
                    this.handleBlur(e.target.value, "firstname");
                    this.setState({ $firstName: e.target.value });
                  }}
                  placeholder="Wayne"
                  name="firstname"
                  ref={(input) => { this.nameInput = input; }}
                />
                <div className={classNames(["form_tag", {"error": this.props.errors.firstName }])}>{this.props.errors.firstName ? 'INVALID FIRST NAME' : "FIRST NAME:"}</div>
              </div>
              <div className="col">
                <input
                  className={classNames(["form_field", {"fieldSuccess": this.state.lastname === "success", "fieldFailure": this.state.lastname === "failure"}])}
                  type="text"
                  onChange={(e, x) => {
                    this.handleBlur(e.target.value, "lastname");
                    this.setState({ $lastName: e.target.value });
                  }}
                  placeholder="Tables"
                  name="lastname"
                />
                <div className={classNames(["form_tag", {"error": this.props.errors.lastName }])}>{this.props.errors.lastName ? 'INVALID LAST NAME' : "LAST NAME:"}</div>
              </div>
            </div>
            <div className="signup__main__wrap__form-full col">
              <input
                className={classNames(["form_field", {"fieldSuccess": this.state.email === "success", "fieldFailure": this.state.email === "failure"}])}
                type="text"
                onChange={(e, x) => {
                  this.handleBlur(e.target.value, "email");
                  this.setState({ $email: e.target.value });
                }}
                placeholder="waynetables@gmail.com"
                name="email"
                defaultValue={this.props.email && this.props.email != " " ? this.props.email : null}
              />
              <div className={classNames(["form_tag", {"error": this.props.errors.email }])}>{this.props.errors.email ? this.props.errors.description : "EMAIL:"}</div>
            </div>
            <div className="signup__main__wrap__form-half row-sb">
              <div className="col">
                <input
                  className={classNames(["form_field", {"fieldSuccess": this.state.password === "success", "fieldFailure": this.state.password === "failure"}])}
                  type="password"
                  onChange={(e, x) => {
                    this.handleBlur(e.target.value, "password");
                    this.setState({ $password: e.target.value });
                  }}
                  name="password"
                  ref="password"
                />
                <div className={classNames(["form_tag", {"error": this.props.errors.password }])}>{this.props.errors.password && !this.props.errors.description ? 'INVALID PASSWORD' : "PASSWORD:"}</div>
              </div>
              <div className="col">
                <input
                  className={classNames(["form_field", {"fieldSuccess": this.state.confirm === "success", "fieldFailure": this.state.confirm === "failure"}])}
                  type="password"
                  onChange={(e, x) => {
                    this.handleBlur(e.target.value, "confirm");
                    this.setState({ $passwordConfirmation: e.target.value });
                  }}
                  name="confirm"
                />
                <div className={classNames(["form_tag", {"error": this.props.errors.password }])}>{this.props.errors.password && this.props.errors.description ? this.props.errors.description : "CONFIRM PASSWORD:"}</div>
              </div>
            </div>
            <div className="signup__main__wrap__form-full col">
              <input
                className={classNames(["form_field", {"fieldSuccess": this.state.zip === "success", "fieldFailure": this.state.zip === "failure"}])}
                type="text"
                onChange={(e, x) => {
                  this.handleBlur(e.target.value, "zip");
                  this.setState({ $zip: e.target.value });
                }}
                placeholder="10001"
                name="zip"
              />
              <div className={classNames(["form_tag", {"error": this.props.errors.zip }])}>{this.props.errors.zip ? 'INVALID ZIP CODE' : "ZIP:"}</div>
            </div>
            <button
              className={classNames(["signup__main__wrap__form-button", {
                "button_available": this.listenForFilledOutFields()
              }])}
              type="submit"
              disabled={!this.listenForFilledOutFields()}
            >Submit</button>
            <button
              onClick={this.props.onCancel}
              className="signup__main__wrap__form-cancel"
              type="button"
            >Cancel</button>
          </form>
        </div>
      </div>
    )
  }
}