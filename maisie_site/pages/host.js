import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import GrowTogether from '../modules/landing/components/growtogether.js';
import Button from '../shared/components/button.js';

const HostFront = () =>
  <div className="whyhostfront">
    <div className="whyhostfront-header light"><Header loggedIn="loggedOut"/></div>
    <div className="whyhostfront-img1" />
    <div className="whyhostfront-img2" />
    <div className="whyhostfront-img3" />
    <div className="whyhostfront-img5" />
    <img className="whyhostfront-img4" src="https://s3.amazonaws.com/maisie-files/landing/back.png" />
    <div className="whyhostfront-title">
      <div className="whyhostfront-forpros">
        <span>For Therapists</span>
      </div>
      Grow your practice.
      <br />
      Practice your interests.
    </div>
  </div>

const HostReasons = () =>
  <div className="whyhostreasons">
    <div className="whyhostreasons__in">
    {[["../../static/shared/payments.svg", "Payments", "Maisie doesn't just accept payments, it automates them. Never deal with cash and checks again. Get instant payouts at any time."],
      ["../../static/shared/managepeople.svg", "People Management", "Manage your Circle members and requests right from our easy-to-use platform."],
      ["../../static/shared/communications.svg", "Communications", "Send out communications to individual members or entire Circles easily. Your info is kept completely private."],
    ].map((a, i) => <div key={i} className="col"><img src={a[0]} /><span>{a[1]}</span><p>{a[2]}</p></div>
    )}
    </div>
    <div className="col-c-c"><Button kind="primary" weight="purple">Start hosting today</Button></div>
  </div>




export default () => {
  const r = [
    {
      "tag": "Grow your practice",
      "message": "Maisie helps you promote your business. Hosting Circles is a great way to meet new patients, giving you another home on the web for others to find you.",
    }, {
      "tag": "Boost your revenue",
      "message": "One 90 minute Circle can bring in double (or more!) what you would make on a typical 1:1 session. Hosting with Maisie can take care of the cost of having a private practice.",
    }, {
      "tag": "Do what you love",
      "message": "Variation and experimentation are not just encouraged on Maisie, they're central to our mission. Customize Circles to match your personality and interests.",
    }
  ].map((y, index) =>
    <div className="whyhost-f__reasons_block col-c-c" key={index}>
      <div className="whyhost-f__reasons_block-num col-c-c">{(index+1).toString()}</div>
      <span className="whyhost-f__reasons_block-tag col-c-c">{y.tag}</span>
      <span className="whyhost-f__reasons_block-msg col-c-c">{y.message}</span>
    </div>
  )
  return(
    <div className="whyhost-f">
      <HostFront />
      <HostReasons />
      <div className="whyhost-f-title col-c-c">
        <div />
        <span>Hosting on Maisie takes your business to the next level</span>
      </div>
      <div className="whyhostplants">
        <img src="../static/shared/plantsncouch.png" />
        <h1>Maisie works with your practice</h1>
      </div>
      <div className="whyhost-f__reasons row">
        {r}
      </div>
      <GrowTogether />
      <Footer />
    </div>
  )
}
