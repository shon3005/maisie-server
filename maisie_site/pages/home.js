import Home from '../modules/home/index';
import React from 'react';
import syncPaymentAccount from '../shared/services/sync-payment';

export default class extends React.Component {
  static async getInitialProps({ query, apolloClient }) {
    if (query.code && query.state) {
      await syncPaymentAccount(apolloClient, query.state, query.code);
    }
    return {};
  }

  constructor(props) {
    super(props)
    this.state = { inSignUpFlow: false }
  }
  handleSignUpToggle() {
    this.setState({ inSignUpFlow: !this.state.inSignUpFlow })
  }
  render() {
    const toShow =
      this.state.inSignUpFlow
      ? <div />
      : <Home onSignUpFlowPress={this.handleSignUpToggle.bind(this)} />
    return(
      <div>{toShow}</div>
    )
  }
}
