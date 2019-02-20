import PhoneEntry from './components/phoneEntry.js';
import React from 'react';
import Button from '../../shared/components/button.js';
import submitSupport from '../../shared/services/submit-support';
import { ApolloConsumer } from 'react-apollo';
import * as actions from '../../shared/services/actions';
import { connect } from 'react-redux';

var classNames = require('classnames')

const Overlay = (props) =>
  <div className="supportoverlay" onClick={props.click} />

const Success = (props) =>
  <div>{props.children}</div>
class Support extends React.Component {
  constructor(props) {
    super(props)
    this.state = { phonePopUp: false, successMessage: false }
    this.handleOverlayHit = this.handleOverlayHit.bind(this)
    this.handlePhoneEntrySubmit = this.handlePhoneEntrySubmit.bind(this)
  }
  handleOverlayHit() {
    this.setState({ phonePopUp: this.state.phonePopUp ? false : true})
  }
  handlePhoneEntrySubmit = async (client) => {
    const phone = this.props.phone ? this.props.phone : document.getElementById('submit_phone_button').value;
    this.setState({ phonePopUp: this.state.phonePopUp ? false : true, successMessage: this.state.phonePopUp ? true : false });
    const {data: {submitSupport: user}} = await submitSupport(client, {
      phone,
      support: true,
    });

    await this.props.updateUser(user);
  }
  render() {
    return(
      <ApolloConsumer>
        {client =>
          <div className="settings__inner col-fs-c">
            <div className="support__inner__top row-c-c">
              <div className="support__inner__top_box col-c-c">
                <img src="../../static/support/text.svg" />
                <div style={{height: 10}} />
                <span className="support__inner__top_box-title">Email us</span>
                <span className="support__inner__top_box-desc">We'll respond as soon as possible</span>
                <div style={{height: 20}} />
                <Button kind="alt" weight="light" href="mailto:support@heymaisie.com">Send an email</Button>
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
                {this.state.phonePopUp ? <PhoneEntry click={() => this.handlePhoneEntrySubmit(client)} phone={this.props.phone}/> : null}
                {this.state.phonePopUp ? <Overlay click={this.handleOverlayHit} /> : null}
              </div>
            </div>
            <div style={{height: 40}} />
          </div>
        }
      </ApolloConsumer>
    )
  }
}

export default connect(null, actions)(Support);