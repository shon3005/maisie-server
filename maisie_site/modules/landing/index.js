import FrontPage from './components/frontpage.js';
import Footer from '../../shared/components/footer/index.js';
import FeaturedRow from './components/featuredrow.js';
import Button from '../../shared/components/button.js';
import Double from './components/double.js';
import Options from './components/options.js';
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
        <div className="landing-intro col-c-c">
          <span className="tag">Hey there. We're Maisie.</span>
          <span className="text">
            We help people manage their mental health and fight
            <br />
            loneliness using the power of group psychotherapy.
          </span>
        </div>
        <div className="landing-stats">
          <div className="landing-stats__in col-fs">
            <span className="landing-stats__in-title">$200 billion</span>
            <br />
            <br />
            <span className="landing-stats__in-explain">
              That's how much we spend every year in the US on mental health. And still, more than half of people who want therapy can't get it.
              Even if you can afford it, it's often confusing and time-consuming to find.
              <br />
            </span>
            <span className="landing-stats__in-emph">
              At Maisie, we're rethinking what it means to take care of our minds in a way that fosters communication, openness, and connection.
            </span>
            <div style={{height: 2, width: 50, backgroundColor: "#7692ff", marginTop: 25, marginBottom: 25}} />
            <div className="col" style={{fontSize: "20px"}}>
            <Button kind="link">Get started with Maisie</Button>
            </div>
          </div>
          <div className="landing-stats__card col">
            <div className="landing-stats__card-img col-c-c" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1536351177167-7275d582546e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80)',
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}><span>COMING SOON</span><div /></div>
            <div className="landing-stats__card-tag col-fs">
              <div />
              <span>HEAR FROM THE HOSTS</span>
            </div>
            <span>Therapists hosting on Maisie discuss what makes groups so powerful.</span>
          </div>
        </div>
        <div className="landing-reasons">
          <span>Why group therapy?</span>
          <div className="landing-reasons__in">
          {[["https://s3.amazonaws.com/maisie-files/shared/affordable.svg", "Affordable", "Maisie is more affordable than one-on-one options, while still providing a meaningful experience with a licensed professional."],
            ["https://s3.amazonaws.com/maisie-files/shared/unique.svg", "Unique", "Get outside, get active, or get talking. No matter what you’re comfortable with, you can find your community on Maisie."],
            ["https://s3.amazonaws.com/maisie-files/shared/transparent.svg", "Transparent", "Say goodbye to the traditional process of finding therapy. Maisie makes it simple and clear right up front."],
          ].map((a, i) => <div key={i} className="col"><img src={a[0]} /><span>{a[1]}</span><p>{a[2]}</p></div>
          )}
          </div>
          <div className="col-c-c"><Button kind="primary" weight="purple">Sign up with Maisie</Button></div>
        </div>
        {props.circles ?
          <div className="featuredrowcontainer">
            <div style={{
              height: 1, width: "90%", marginLeft: "5%", backgroundColor: "rgba(5, 45, 84, 0.05)",
            }} />
            <FeaturedRow circles={props.circles} />
          </div>
        : null}
        <Options />
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
