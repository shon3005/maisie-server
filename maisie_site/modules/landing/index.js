import React, { Component } from "react";
import SignUp from '../../shared/components/signup/index.js';
import FrontPage from './components/frontpage.js';
import WhyCommunity from './components/whycommunity.js';
import HowItWorks from './components/howitworks.js';
import Details from './components/details.js';
import DoubleWindow from './components/doublewindow/index.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from './components/featuredrow.js';

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
    const furtherSignUp = this.state.showSignup ? <SignUp email={this.state.email} onCancel={this.handleButton} handleButton={this.handleButton} /> : null
    return(
      <div>
        {furtherSignUp}
        <div className="landing container">
            <FrontPage onEmailEntry={this.handleEmailEntry} />
            <FeaturedRow />
            <WhyCommunity />
            <HowItWorks />
            <DoubleWindow />
            <Footer />
        </div>
      </div>
    )
  }
}
