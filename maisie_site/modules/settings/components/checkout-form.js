// CheckoutForm.js
import React from 'react';
import {injectStripe} from 'react-stripe-elements-universal';
import CardSection from './card-section';
import createCustomer from '../../../shared/services/create-customer';
import updateCustomer from '../../../shared/services/update-customer';
import { ApolloConsumer } from 'react-apollo';

class CheckoutForm extends React.Component {
  handleSubmit = (client) => (ev) => {
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    // this.props.stripe.createToken({name: 'Shaun Chua'}).then(({token}) => {
    //   console.log('Received Stripe token:', token);
    // });

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    this.props.stripe.createSource({type: 'card', owner: {
      name: 'Shaun Chua'
    }}).then(({source}) => {
        createCustomer(client, source.id);
    });
  };

  handleUpdate = (client) => (ev) => {
    ev.preventDefault();
    this.props.stripe.createSource({type: 'card', owner: {
      name: 'Shaun Chua'
    }}).then(({source}) => {
        updateCustomer(client, source.id);
    });
  };

  render() {
    return (
        <ApolloConsumer>
            {client => (
                <form onSubmit={this.handleSubmit(client)} style={{width: "100%"}}>
                    <CardSection />
                    <div className="settings__inner-submit row-fe-c"><button>Add Card</button></div>
                </form>
            )}
        </ApolloConsumer>
    );
  }
}

export default injectStripe(CheckoutForm);
