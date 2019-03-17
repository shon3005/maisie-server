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
import Button from '../../../shared/components/button';

class CheckoutForm extends React.Component {
  state = {
    addCardMessage: 'Add Card',
    showError: false
  }

  handleSubmit = (client) => async (ev) => {
    ev.preventDefault();
    document.getElementById("submit_card_button").classList.add('saving');
    this.setState({addCardMessage: "Adding Card..."});
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
      this.setState({addCardMessage: 'Add Card'});
      Router.route === '/signup' ? this.proceedToIndex() : null;
    } catch (e) {
      document.getElementById("submit_card_button").classList.remove('saving');
      this.setState({addCardMessage: 'Add Card', showError: true});
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
              <div style={{height: 20}} />
              <div className="settings__inner-submit row-fe-c">
                {this.state.showError ? <span style={{color: "#FF8585", marginRight: "10px"}}>Card Is Invalid</span> : null}
                {
                  this.state.addCardMessage === 'Add Card' ?
                  <Button kind="primary" weight="purple" id="submit_card_button" onClick={this.handleSubmit(client)}>{this.state.addCardMessage}</Button> :
                  <Button kind="primary" weight="purple" saving='Adding Card...' id="submit_card_button" />
                }
              </div>
            </form>
            {
              Router.route === '/signup' ?
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
