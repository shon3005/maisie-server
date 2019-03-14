import React, {Component} from 'react';
import stripeTransactions from '../../shared/services/stripe-transactions-2';
import syncPayment from '../../shared/services/sync-payment';
import Footer from '../../shared/components/footer/index.js';
import Header from '../../shared/components/header/index.js';
import HostHeader from './hostheader/index.js';
import Finances from './finances/index.js';
import Circles from './circles/index.js';
import Profile from './profile/index.js';
import Modal from '../../shared/components/modal/index.js';
import ProfileModal from './profile/profilemodal.js';
import SetUpStripePrompt from './setupstripeprompt.js';

const activePage = (user, sub, finances, updateUser) => {
  return user.host && user.host.hasStripeAccount
    ? sub === "finances" ? <Finances finances={finances} host={user.host}/> : sub === "circles" ? <Circles userId={user.id} hostId={user.host.id} updateUser={updateUser}/> : sub === "profile" ? <Profile user={user} /> : null
    : <SetUpStripePrompt/>
}

export default class PanelModule extends Component {
  state = {}
  async componentDidMount() {
    const hostId = this.props.user.host ? this.props.user.host.id : null;
    const hasStripe = this.props.user.host ? this.props.user.host.hasStripeAccount : null;
    if (hostId && hasStripe) {
      const stripeTransactionsResp = this.handleStripeTransactions(this.props.client, hostId);
      const str = await stripeTransactionsResp;
      str && str.data && str.data.stripeTransactions ? this.setState({finances: str.data.stripeTransactions}) : null;
    }
    if (!hasStripe && this.props.code && this.props.state) {
      const syncPaymentResp = this.handleSyncPayment(this.props.client, this.props.state, this.props.code, this.props.user.host.id);
      const spr = await syncPaymentResp;
      const stripeTransactionsResp =
        spr && spr.data && spr.data.syncPaymentAccount && spr.data.syncPaymentAccount && spr.data.syncPaymentAccount.user ?
          this.handleStripeTransactions(this.props.client, this.props.user.host.id) : null;

      const str = await stripeTransactionsResp;
      str && str.data && str.data.stripeTransactions && str.data.stripeTransactions ?
        this.handleUpdateUser(this.props.updateUser, spr.data.syncPaymentAccount.user) : null;
      str && str.data && str.data.stripeTransactions ? this.setState({finances: str.data.stripeTransactions}) : null;
    }
  }

  handleStripeTransactions = async (client, hostId) => {
    try {
      const st = await stripeTransactions(client, hostId);
      return st;
    } catch(e) {
      return e;
    }
  }

  handleSyncPayment = async (client, state, code, hostId) => {
    try {
      const sp = await syncPayment(client, state, code, hostId);
      return sp;
    } catch(e) {
      return e;
    }
  }

  handleUpdateUser = (updateUser, user) => {
    try {
      const uu = updateUser(user);
      return uu;
    } catch(e) {
      return e;
    }
  }

  render() {
    return <div className="panel">
      <Modal id="profile_modal">
        {
          this.props.user && this.props.user.host
          ? <ProfileModal user={this.props.user} token={this.props.token}/>
          : null
        }
      </Modal>
      <Header loggedIn="loggedIn"/>
      <HostHeader page={this.props.sub} />
      <div className="panel__inner">
        {activePage(this.props.user, this.props.sub, this.state.finances, this.props.updateUser)}
      </div>
      <Footer />
    </div>
  }
}
