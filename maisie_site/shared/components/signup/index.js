import React, { Component } from "react";
import SlideOne from "./components/slide1.js";
import SlideTwo from "./components/slide2.js";
import SlideThree from "./components/slide3.js";
import registerUser from '../../services/register-user';
import { ApolloConsumer } from 'react-apollo';

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { submitted: "not_submitted" }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e, client) {
    this.setState({ submitted: "submitting" })
    // insert logic for backend call
    // also enable spinner during this time (we can just use the image at 'static/shared/icon' as a spinner that appears while this function is running)
    try {
      const result = await registerUser(client, e.firstName, e.lastName, e.email, e.password, e.passwordConfirmation);
      this.setState({ submitted: "submitted" })
    } catch(e) {
      console.log(e);
    }
  }

  withActiveSlide = (a, b, c) => {
    if (this.state.submitted === "submitted") { return c }
    else if (this.state.submitted === "submitting") { return b }
    else if (this.state.submitted === "not_submitted") { return a }
  }

  render() {
    return(
      <ApolloConsumer>
        {client => (
          <div className="signup col-c-c">
            <div className="signup__main col-c-c">
              {this.withActiveSlide(<SlideOne email={this.props.email} onSubmit={(event) => this.handleSubmit(event, client)} />, <SlideTwo />, <SlideThree />)}
            </div>
          </div>
        )}
      </ApolloConsumer>
    )
  }
}
