// CheckoutForm.js
import React from 'react';
import {injectStripe} from 'react-stripe-elements-universal';
import CardSection from './card-section';
import createCustomer from '../../../shared/services/create-customer';
import updateCustomer from '../../../shared/services/update-customer';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import { connect } from 'react-redux';
import * as actions from '../../../shared/services/actions';

class CheckoutForm extends React.Component {
  state = {
    addCardMessage: 'Add Card'
  }

  handleSubmit = (client) => async (ev) => {
    ev.preventDefault();
    console.log('CLIENT SIDE ROUTE', Router.route);
    document.getElementById("submit_card_button").classList.add('saving');
    this.setState({submitMessage: "Adding Card..."});
    try {
      const {source} = await this.props.stripe.createSource({type: 'card', owner: {
        name: this.props.user.firstName + ' ' + this.props.user.lastName
      }});
      const {data} = Router.route === '/signup' ?
        await createCustomer(client, source.id) :
        await updateCustomer(client, source.id);
      Router.route === '/signup' ?
        await this.props.updateUser(data.createCustomer) :
        await this.props.updateUser(data.updateCustomer);
      document.getElementById("submit_card_button").classList.remove('saving');
      this.setState({addCardMessageMessage: 'Add Card'});
      Router.route === '/signup' ? this.proceedToIndex() : null;
    } catch (e) {
      console.log(e);
    }
  };

  proceedToIndex = () => {
    console.log('PUSH TO INDEX');
    Router.push('/');
  }

  render() {
    console.log('ROUTE', this.props.route);
    return (
      <ApolloConsumer>
        {client => (
          <div>
            <form onSubmit={this.handleSubmit(client)} style={{width: "100%"}}>
              <div className="settings__inner-payments">
                <CardSection />
              </div>
              <div className="settings__inner-submit row-fe-c">
                <button id="submit_card_button">{this.state.addCardMessage}</button>
              </div>
            </form>
            {
              this.props.route === '/signup' ?
                <button className="settings__inner-addlater col-c-c" type="button" onClick={this.proceedToIndex}>I'll Add It Later</button> :
                null
            }
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

export default injectStripe(connect(null, actions)(CheckoutForm));
