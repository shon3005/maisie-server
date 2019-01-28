import PhoneEntry from './components/phoneEntry.js';

export default () =>
  <div className="support col-fs-c">
    <div className="support__top row-c-c">
      <div className="support__top_box col-c-c">
        <img src="../../static/support/text.svg" />
        <div style={{height: 10}} />
        <span className="support__top_box-title">Email us</span>
        <span className="support__top_box-desc">We'll respond as soon as possible</span>
        <div style={{height: 20}} />
        <a href="mailto:support@heymaisie.com"><button>Send an email</button></a>
      </div>
                    <div className="support__top-space" />
      <div className="support__top_box col-c-c">
        <img src="../../static/support/phone.svg" />
        <div style={{height: 10}} />
        <span className="support__top_box-title">Have us call you</span>
        <span className="support__top_box-desc">Available 10am-6pm EST</span>
        <div style={{height: 20}} />
        <a href=""><button>Talk to us</button></a>
        <PhoneEntry />
      </div>
    </div>
  </div>
