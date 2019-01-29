import withPage from '../shared/withPage';
import withPageNoSide from '../shared/withPageNoSide';
import Home from '../modules/home/index';
import React from 'react';

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
      ? <div />
      : <Home onSignUpFlowPress={this.handleSignUpToggle.bind(this)} />
    return(
      <div>{toShow}</div>
    )
  }
}
