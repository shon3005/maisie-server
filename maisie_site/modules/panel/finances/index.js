import LargeText from '../../../shared/components/text/largeText.js';
import Card from './components/card.js';

export default (props) =>
  <div className="hostfinances col">
    <div className="hostfinances__top row-sb-c">
      <LargeText>Recent Transactions</LargeText>
      <a href="https://www.stripe.com" className="hostfinances__top-cta">Stripe Dashboard</a>
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
