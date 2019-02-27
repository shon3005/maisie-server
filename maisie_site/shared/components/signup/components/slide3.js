import AddPayment from '../../../../modules/settings/components/add-payment';
import LargeText from '../../text/largeText.js';
import SmallText from '../../text/smallText.js';

export default (props) =>
  <div className="signup__addpayment col-c-c">
    <LargeText>Billing</LargeText>
    <SmallText>Please add a payment method</SmallText>
    <AddPayment user={props.user} route={props.route}/>
  </div>
