// CheckoutForm.js
import React from 'react';
import {injectStripe} from 'react-stripe-elements-universal';
import CardSection from './card-section';
import createCustomer from '../../../shared/services/create-customer';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';

class CheckoutForm extends React.Component {
  handleSubmit = (client) => async (ev) => {
    ev.preventDefault();
    try {
      const { source } = await this.props.stripe.createSource({type: 'card', owner: {
        name: 'Shaun Chua'
      }});
      await createCustomer(client, source.id);
      this.proceedToIndex(props);
    } catch (e) {
      console.log(e);
    }
  };

  proceedToIndex = () => {
    Router.push('/');
  }

  render() {
    return (
        <ApolloConsumer>
            {client => (
              <div>
                <form onSubmit={this.handleSubmit(client)} style={{width: "100%"}}>
                    <div className="settings__inner-payments">
                      <CardSection />
                    </div>
                    <div className="settings__inner-submit row-fe-c"><button>Add Card</button></div>
                </form>
                <button style={{width: "50%"}} onClick={this.proceedToIndex}>I'll Add It Later</button>
              </div>
            )}
        </ApolloConsumer>
    );
  }
}

export default injectStripe(CheckoutForm);
