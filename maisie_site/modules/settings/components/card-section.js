// CardSection.js
import React from 'react';
import {CardElement} from 'react-stripe-elements-universal';

class CardSection extends React.Component {
  render() {
    return (
      <label>
        <CardElement style={style} />
      </label>
    );
  }
}

export default CardSection;

var style = {
  base: {
    color: '#32325d',
    lineHeight: '18px',
    fontFamily:  "Open Sans",
    fontWeight: 600,
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      fontWeight: 400,
      color: 'rgba(5,45,84,.25)'
    }
  },
  invalid: {
    color: '#FF8585',
    iconColor: '#FF8585'
  }
};
