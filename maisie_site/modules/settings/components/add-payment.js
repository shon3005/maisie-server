// MyStoreCheckout.js
import React from 'react';
import {Elements} from 'react-stripe-elements-universal';

import InjectedCheckoutForm from './checkout-form';

class AddPayment extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm />
      </Elements>
    );
  }
}

export default AddPayment;
