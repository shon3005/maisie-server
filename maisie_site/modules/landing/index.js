import FrontPage from './components/frontpage.js';
import WhyCommunity from './components/whycommunity.js';
import HowItWorks from './components/howitworks.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from './components/featuredrow.js';
import GrowTogether from './components/growtogether.js';
import Button from '../../shared/components/button.js';
import Double from './components/double.js';

const HostCta = () =>
  <div className="landing-hostcta row-sa-c">
    <div className="landing-hostcta__cont col">
      <span className="landing-hostcta__cont-title">Are you a mental health professional?</span>
      <span className="landing-hostcta__cont-text">Learn how Maisie can help you</span>
    </div>
    <a href="/host" className="landing-hostcta-cta col-c-c">Explore hosting →</a>
  </div>

export default (props) =>
  <div>
    <div className="landing container">
        <FrontPage />
        {props.circles ?
          <div className="featuredrowcontainer">
            <FeaturedRow circles={props.circles} />
          </div>
        : null}
        <div className="landing-intro col-c-c">
          <span className="tag">Hey there. We're Maisie.</span>
          <span className="text">
            We offer an affordable and fun way to maintain your
            <br />
            mental health and make friends, which we call Circles.
          </span>
        </div>
        <div className="landing-reasons">
          <div className="landing-reasons__in">
          {[["../../static/shared/affordable.svg", "Affordable", "Maisie is many times more affordable than one-on-one options, and does not require insurance to get started."],
            ["../../static/shared/unique.svg", "Unique", "Experiences on Maisie are fun! Get outside, get active, or get talking. No matter what you’re comfortable with, you can find your Circle on Maisie."],
            ["../../static/shared/transparent.svg", "Transparent", "You’ll never be surprised by pricing or expectations on Maisie– every detail is clear up front."],
          ].map((a, i) => <div key={i} className="col"><img src={a[0]} /><span>{a[1]}</span><p>{a[2]}</p></div>
          )}
          </div>
          <div className="col-c-c"><Button kind="primary" weight="purple">Join your first Circle</Button></div>
        </div>
        <Double />
        <div className="whyhostcta col-c-c">
          <h1>Are you a mental health professional?</h1>
          <span>Learn how Maisie can help grow your business.</span>
          <div style={{height: 20}} />
          <Button kind="primary" weight="light" href="/host">Show me how</Button>
        </div>
        {/* <GrowTogether /> */}
        <Footer />
    </div>
  </div>
