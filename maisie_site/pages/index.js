import React, { Component } from "react";
import Landing from '../modules/landing/index.js';
import Home from '../modules/home/index';
import { connect } from 'react-redux';
import cookie from 'cookie';

class Index extends Component {
  static getInitialProps (context) {
    try {
      if (context.req) {
        const cookies = cookie.parse(context.req.headers.cookie || '');
        if (cookies.userServer) {
          return { user: cookies.userServer };
        }
      }
    } catch(e) {
      console.log(e);
    }
    return { user: undefined };
  }

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
  return process.browser ? 
    { user: state.user.user } :
    {};
}

export default connect(mapStateToProps)(Index);