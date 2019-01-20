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
    this.handleEmailEntry = this.handleEmailEntry.bind(this)
    this.handleButton = this.handleButton.bind(this)
  }
  handleEmailEntry = (email) => {
    this.setState({email: email, showSignup: email ? true : false});
  }
  handleButton() {
    this.setState({email: "", showSignup: false})
  }

  render() {
    return(
      <div>
        {furtherSignUp}
        <div className="landing container">
            <FrontPage onEmailEntry={this.handleEmailEntry} />
            <WhyCommunity />
            <HowItWorks onEmailEntry={this.handleEmailEntry} />
            <div className="landing__content col-c-c">
              <Details onEmailEntry={this.handleEmailEntry} />
            </div>
            <DoubleWindow />
            <Footer />
        </div>
      </div>
    )
  }
}
