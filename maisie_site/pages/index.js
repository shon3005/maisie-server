import React, { Component } from "react";
import Landing from '../modules/landing/index.js';
import Home from '../modules/home/index';
import { connect } from 'react-redux'
import getAllCircles from '../shared/services/get-all-circles';
import { Query } from 'react-apollo';
import cookie from 'cookie';
class Index extends Component {
  static getInitialProps({ctx}) {
    let cookies;
    if (ctx.req) {
      cookies = cookie.parse(ctx.req.headers.cookie || '');
    } else {
      cookies = cookie.parse(document.cookie || '');
    }
    return {token: cookies.token};
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
      this.props.token ?
          <Query query={getAllCircles}>
            {getAllCircles => {
              const circles = getAllCircles.data && getAllCircles.data.circles && getAllCircles.data.circles.length > 0 ? getAllCircles.data.circles : [];
              return <Home onSignUpFlowPress={this.handleSignUpToggle.bind(this)} user={this.props.user} circles={circles}/>
            }}
          </Query> :
          <Query query={getAllCircles}>
            {getAllCircles => {
              return <Landing circles={getAllCircles.data && getAllCircles.data.circles && getAllCircles.data.circles.length > 0 ? getAllCircles.data.circles : null}/>
            }}
          </Query>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user.user };
}

export default connect(mapStateToProps)(Index);
