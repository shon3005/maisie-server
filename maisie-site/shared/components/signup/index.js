import React, { Component } from "react";
import SlideOne from "./components/slide1.js";
import SlideTwo from "./components/slide2.js";
import SlideThree from "./components/slide3.js";

import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { submitted: "not_submitted"}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  signUpUser = async (credentials) => {
    try {
      const response = await axios.post(`/api/users/register/`, credentials);
      this.setState({ submitted: "submitted" })
    } catch (e) {
      this.setState({ submitted: "not_submitted", errors: e.response.data.msg });
    }
  }

  handleSubmit(credentials) {
    event.preventDefault()
    this.setState({ submitted: "submitting" })
    this.signUpUser(credentials);
  }

  withActiveSlide = (a, b, c) => {
    if (this.state.submitted === "submitted") { return c }
    else if (this.state.submitted === "submitting") { return b }
    else if (this.state.submitted === "not_submitted") { return a }
  }

  render() {
    return(
      <div className="signup col-c-c">
        <div className="signup__main col-c-c">
          {this.withActiveSlide(<SlideOne email={this.props.email} onSubmit={this.handleSubmit} errors={this.state.errors ? this.state.errors : {}} />, <SlideTwo />, <SlideThree handleButton={this.props.handleButton} />)}
        </div>
      </div>
    )
  }
}
