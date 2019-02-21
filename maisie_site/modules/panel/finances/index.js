import LargeText from '../../../shared/components/text/largeText.js';
import Button from '../../../shared/components/button.js';
import Card from './components/card.js';

export default (props) =>
  <div className="hostfinances col">
    <div className="hostfinances__top">
      <LargeText>Recent Transactions</LargeText>
      <div className="hostfinances__top_right">
        <div className="hostfinances__top_right-bal row-fs-fe">
          <span className="tag">Available balance: </span>
          <span className="text">{" $" + props.availableBalance}</span>
        </div>
        <div className="row-fs-c">
          <Button kind="ext" weight="light" href="https://www.stripe.com">Visit Stripe Dashboard</Button>
          <div style={{width: 10}} />
          <Button kind="primary" weight="purple"><span>Pay out<span style={{fontWeight: "600"}}>{" $" + props.availableBalance}</span></span></Button>
        </div>
      </div>
    </div>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <div style={{height: 20}} />
    <a href="mailto:providers@heymaisie.com">Something incorrect?</a>
  </div>




  // <a href="https://www.stripe.com" className="hostfinances__top-cta row-c-c"><span>Stripe Dashboard</span><img src="../../../static/shared/external_lightblue.svg" /></a>
