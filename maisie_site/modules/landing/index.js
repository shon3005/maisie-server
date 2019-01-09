import React, { Component } from "react";
import SignUp from '../../shared/components/signup/index.js';
import FrontPage from './components/frontpage.js';
import WhyCommunity from './components/whycommunity.js';
import HowItWorks from './components/howitworks.js';
import Details from './components/details.js';
import DoubleWindow from './components/doublewindow/index.js';
import Footer from '../../shared/components/footer.js';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "", showSignup: false }
  }
  handleEmailEntry = (email) => {
    this.setState({email: email, showSignup: email ? true : false});
  }
  render() {
    const furtherSignUp = this.state.showSignup ? <SignUp email={this.state.email} /> : null
    return(
      <div className="landing container">
          {furtherSignUp}
          <FrontPage onEmailEntry={this.handleEmailEntry} />
          <WhyCommunity />
          <HowItWorks onEmailEntry={this.handleEmailEntry} />
          <div className="landing__content col-c-c">
            <Details onEmailEntry={this.handleEmailEntry} />
          </div>
          <DoubleWindow />
          <Footer />
      </div>
    )
  }
}
