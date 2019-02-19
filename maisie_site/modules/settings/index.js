import React from 'react';
import AddPayment from './components/add-payment';
import LargeText from '../../shared/components/text/largeText.js';
import SmallText from '../../shared/components/text/smallText.js';
import Field from '../../shared/components/text/field.js';
import Disclaimer from '../../shared/components/text/disclaimer.js';

var classNames = require('classnames')

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      old_pass: false,
      new_pass: false,
      confirm_pass: false,
      pass_error: ""
    }
  }

  handlePassSubmit() {
    var old_pass = document.getElementById("old_pass").value;
    var new_pass = document.getElementById("new_pass").value;
    var confirm_pass = document.getElementById("confirm_pass").value;
    !old_pass.length ? this.setState({old_pass: ""}) : this.setState({old_pass: true });
    !new_pass.length ? this.setState({new_pass: ""}) : this.setState({new_pass: true });
    !confirm_pass.length ? this.setState({confirm_pass: ""}) : this.setState({confirm_pass: true });
    new_pass != confirm_pass ? this.setState({ confirm_pass: "", new_pass: "", pass_error: "Passwords do not match" }) : null;
  }

  render() {
    const PassError = () => this.state.pass_error ? <Disclaimer><span style={{color: "#FF8585"}}>{"Error: " + this.state.pass_error}</span></Disclaimer> : null;
    return(
      <div className="settings__inner">
        <LargeText>Settings</LargeText>
        <SmallText>Change Password</SmallText>
        <Field title="Old Password">
          <input
            type="password"
            id="old_pass"
            className={classNames({
              "red": this.state.old_pass === ""
            })}
          />
        </Field>
        <Field title="New Password">
          <input
            type="password"
            id="new_pass"
            className={classNames({
              "red": this.state.new_pass === ""
            })}
          />
        </Field>
        <Field title="Confirm">
          <input
            type="password"
            id="confirm_pass"
            className={classNames({
              "red": this.state.confirm_pass === ""
            })}
          />
        </Field>
        <PassError />
        <div className="settings__inner-submit row-fe-c"><button onClick={this.handlePassSubmit.bind(this)}>Submit</button></div>

        <div style={{height: 25}} />
        <div className="row-sb-c">
          <SmallText>Billing</SmallText>
          <span className="settings__currentcard"><em>Current card ending in #0030</em></span>
        </div>
        <AddPayment user={this.props.user} route={this.props.route} />
      </div>
    )
  }
}
