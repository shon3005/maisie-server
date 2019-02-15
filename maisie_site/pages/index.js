import React, { Component } from "react";
import Landing from '../modules/landing/index.js';
import Home from '../modules/home/index';
import { connect } from 'react-redux';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { inSignUpFlow: false }
  }

  handleSignUpToggle() {
    this.setState({ inSignUpFlow: !this.state.inSignUpFlow })
  }

  render() {
    return (
      this.props.user ? <Home onSignUpFlowPress={this.handleSignUpToggle.bind(this)} user={this.props.user}/> : <Landing />
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
}

export default connect(mapStateToProps)(Index);