import Button from '../shared/components/button.js';
import Step from '../modules/hostwelcome/step.js';
import { connect } from 'react-redux';
const mapStateToProps = (state) => process.browser ? { user: state.user.user } : {};

const HostWelcome = () =>
  <div className="hostwelcome col-c-c">
    <div className="hostwelcome__in col-fs-c">
      <span className="title">WELCOME TO</span>
      <img className="logo" src="https://s3.amazonaws.com/maisie-files/header/logo_nocircle.svg" />
      <Step
        num={1}
        text="Set up an account with Stripe"
        img="https://s3.amazonaws.com/maisie-files/shared/creditcard.svg"
        href="https://www.stripe.com"
        href_title="Set up Stripe account"
      />
      <Step
        num={2}
        text="Add some info to your Host Profile"
        img="https://s3.amazonaws.com/maisie-files/shared/heartcircle.svg"
        href="https://www.stripe.com"
        href_title="Set up Stripe account"
      />
      <Step
        num={3}
        text="Create your first Circle"
        img="https://s3.amazonaws.com/maisie-files/shared/spincircle.svg"
        href="https://www.stripe.com"
        href_title="Set up Stripe account"
      />
    </div>
  </div>

export default connect(mapStateToProps)(HostWelcome);
