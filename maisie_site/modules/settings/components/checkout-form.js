// CheckoutForm.js
import React from 'react';
import {injectStripe} from 'react-stripe-elements-universal';
import CardSection from './card-section';
import createCustomer from '../../../shared/services/create-customer';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import { connect } from 'react-redux';

class CheckoutForm extends React.Component {
  handleSubmit = (client) => async (ev) => {
    ev.preventDefault();
    try {
      const {source} = await this.props.stripe.createSource({type: 'card', owner: {
        name: this.props.user.firstName + ' ' + this.props.user.lastName
      }});
      await createCustomer(client, source.id);
      this.proceedToIndex();
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
              <div className="settings__inner-submit row-fe-c">
                <button>Add Card</button>
              </div>
            </form>
            {
              this.props.router === '/signup' ? 
                <button className="settings__inner-addlater col-c-c" type="button" onClick={this.proceedToIndex}>I'll Add It Later</button> :
                null
            }
          </div>
        )}
      </ApolloConsumer>
    );
  }
}

const mapStateToProps = (_) => {
  return process.browser ? 
    { router: Router.route } :
    {};
}

export default injectStripe(connect(mapStateToProps)(CheckoutForm));
