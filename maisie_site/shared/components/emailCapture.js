import React, { Component } from "react";
var classNames = require('classnames');

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { emailEntry: "" }
  }
  handleEmailEntry(e) {
    this.setState({ emailEntry: e.target.value })
  }
  submitEmailEntry(e, n) {
    e.preventDefault()
    var n = this.state.emailEntry
    this.props.onEmailEntry(n)
  }
  listenForFilledOutField() {
    return this.state.emailEntry.length > 0
  }
  render() {
    return(
      <div className={classNames(["emailbox", "row-sb-c", {
        "email-light": this.props.color === 1,
        "email-dark": this.props.color === 2
      }])}>
        <form className="row-sb-c" onSubmit={this.submitEmailEntry.bind(this)}>
          <input
            type="text"
            name="email"
            placeholder="Email address"
            onChange={(e) => this.handleEmailEntry(e)}
          />
          <button
            type="submit"
            className="col-c-c"
            disabled={!this.listenForFilledOutField()}
          >
            Get started
          </button>
        </form>
      </div>
    )
  }
}
