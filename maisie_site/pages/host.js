import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import GrowTogether from '../modules/landing/components/growtogether.js';
import Button from '../shared/components/button.js';

const HostFront = () =>
  <div className="whyhostfront col-fs-fe">
    <div className="whyhostfront-header light"><Header trnsp loggedIn="loggedOut"/></div>
    <img src="../static/shared/couch.svg" />
    <div className="whyhostfront-title">
      Practice your interests.
      <br />
      Grow your practice.
    </div>
    <span className="whyhostfront-sub">Maisie can help.</span>
    <Button style={{marginRight: '5%'}} kind="primary" weight="dark">Find out how</Button>
  </div>

const HostReasons = () =>
  <div className="whyhostreasons">
    <div style={{height: 50}} />
    <div className="whyhost-f-title col-c-c">
      <div />
      <span>Hosting on Maisie takes your business to the next level</span>
    </div>
    <div className="whyhostreasons__in">
    {[["https://s3.amazonaws.com/maisie-files/shared/payments.svg", "Payments", "Maisie doesn't just accept payments, it automates them. Never deal with cash and checks again. Get instant payouts at any time."],
      ["https://s3.amazonaws.com/maisie-files/shared/managepeople.svg", "People Management", "Manage your Circle members and requests right from our easy-to-use platform."],
      ["https://s3.amazonaws.com/maisie-files/shared/communications.svg", "Communications", "Send out communications to individual members or entire Circles easily. Your info is kept completely private."],
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
      <div className="whyhosthow row-sb-c">
        <img src="https://s3.amazonaws.com/maisie-files/landing/back.png" />
        <div class="col-fs-c">
          <h1>How does it work?</h1>
          <div className="row">
            <div className="col-c-c">1</div>
            <div>
              <h2>Sign Up</h2>
              <p>Signing up takes just a few minutes, and is totally free. Browse our site to get some inspiration, or reach out to us. We’ll help you every step of the way.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-c-c">2</div>
            <div>
              <h2>Create</h2>
              <p>Fill out your profile and start crafting your first Circle. Maisie puts an emphasis on design, so you’ll have an amazing-looking page right out of the box.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-c-c">3</div>
            <div>
              <h2>Host</h2>
              <p>Users will apply to join your Circle, and you’re in charge of deciding who comes. Don’t worry about payments or communicating schedules– we handle it all.</p>
            </div>
          </div>
          <Button
            kind="link"
            href="mailto:providers@heymaisie.com"
            style={{
              marginTop: 20
            }}>Reach out to get started</Button>
        </div>
      </div>
      <GrowTogether />
      <Footer />
    </div>
  )
}
