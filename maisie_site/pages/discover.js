import withPage from '../shared/withPage';
import withPageNoSide from '../shared/withPageNoSide';
import Discover from '../modules/discover/index';
import React, { Component } from 'react';

export default class extends React.Component {
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
      ? withPageNoSide( <div /> )
      : withPage( <Discover onSignUpFlowPress={this.handleSignUpToggle.bind(this)} />, "discover" )
    return(
      <div>{toShow}</div>
    )
  }
}
