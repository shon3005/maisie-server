import React, { Component } from "react";
import SlideOne from "./components/slide1.js";
import SlideTwo from "./components/slide2.js";
import SlideThree from "./components/slide3.js";
import registerUser from '../../services/register-user';
import { ApolloConsumer } from 'react-apollo';
import { connect } from 'react-redux';
import * as actions from '../../services/actions';
import Back from '../../../modules/circle/components/back.js';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = { submitted: "not_submitted" }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (form, client) => {
    this.setState({ submitted: "submitting" })
    this.signupUser(form, client);
  }

  signupUser = async (form, client) => {
    try {
      const { data } = await registerUser(client, form.firstName, form.lastName, form.email, form.password, form.passwordConfirmation);

      await this.props.updateUser({
        id: data.registerUser.user.id,
        firstName: data.registerUser.user.firstName,
        lastName: data.registerUser.user.lastName,
        email: data.registerUser.user.email
      });

      await this.props.updateToken(data.registerUser.token);

      this.setState({ submitted: "submitted" });

    } catch (e) {
      e.graphQLErrors ?
        e.graphQLErrors.forEach((error) => {
          this.setState({error: error.details});
        }) :
        null;

      console.log(e);
      this.setState({ submitted: "not_submitted" });
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
            <Back />
            <div className="signup__main col-c-c">
              {this.withActiveSlide(<SlideOne onSubmit={(form) => this.handleSubmit(form, client)} error={this.state.error ? this.state.error : null} />, <SlideTwo />, <SlideThree user={this.props.user} handleButton={this.props.handleButton} />)}
            </div>
          </div>
        )}
      </ApolloConsumer>
    )
  }
}

const mapStateToProps = (state) => {
  return process.browser ? 
    { user: state.user.user } :
    {};
}

export default connect(mapStateToProps, actions)(Signup);
