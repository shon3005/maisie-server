import React, { Component } from "react";
import Landing from '../modules/landing/index.js';
import Home from '../modules/home/index';
import { connect } from 'react-redux'
import getAllCircles from '../shared/services/get-all-circles';
import { Query } from 'react-apollo';

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
      this.props.user ?
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
