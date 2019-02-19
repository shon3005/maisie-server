import PhoneEntry from './components/phoneEntry.js';
import React from 'react';
import Button from '../../shared/components/button.js';

var classNames = require('classnames')

const Overlay = (props) =>
  <div className="supportoverlay" onClick={props.click} />

const Success = (props) =>
  <div>{props.children}</div>
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { phonePopUp: false, successMessage: false }
    this.handleOverlayHit = this.handleOverlayHit.bind(this)
    this.handlePhoneEntrySubmit = this.handlePhoneEntrySubmit.bind(this)
  }
  handleOverlayHit() {
    this.setState({ phonePopUp: this.state.phonePopUp ? false : true})
  }
  handlePhoneEntrySubmit() {
    this.setState({ phonePopUp: this.state.phonePopUp ? false : true, successMessage: this.state.phonePopUp ? true : false })
  }
  render() {
    const phone = this.state.phonePopUp ? <PhoneEntry click={this.handlePhoneEntrySubmit} /> : null
    const overlay = this.state.phonePopUp ? <Overlay click={this.handleOverlayHit} /> : null
    return(
      <div className="settings__inner col-fs-c">
        <div className="support__inner__top row-c-c">
          <div className="support__inner__top_box col-c-c">
            <img src="../../static/support/text.svg" />
            <div style={{height: 10}} />
            <span className="support__inner__top_box-title">Email us</span>
            <span className="support__inner__top_box-desc">We'll respond as soon as possible</span>
            <div style={{height: 20}} />
            <Button saving="saving" kind="primary" weight="purple" href="mailto:support@heymaisie.com">Send an email</Button>
          </div>
                        <div className="support__inner__top-space" />
          <div className="support__inner__top_box col-c-c">
            <img src="../../static/support/phone.svg" />
            <div style={{height: 10}} />
            <span className="support__inner__top_box-title">Have us call you</span>
            <span className={classNames({
              "support__inner__top_box-desc": true,
              "success": this.state.successMessage,
            })}>{this.state.successMessage ? "Success. We'll call you shortly!" : "Available 10am-6pm EST"}</span>
            <div style={{height: this.state.successMessage ? 50 : 20}} />
            <Button kind="alt" weight="light" onClick={this.handleOverlayHit}>Talk to us</Button>
            {phone} {overlay}
          </div>
        </div>
        <div style={{height: 40}} />
      </div>
    )
  }
}
