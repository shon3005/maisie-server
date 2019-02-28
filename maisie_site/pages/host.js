import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import GrowTogether from '../modules/landing/components/growtogether.js';
import Button from '../shared/components/button.js';

const HostFront = () =>
  <div className="whyhostfront col-fs-fe">
    <div className="whyhostfront-header light"><Header trnsp loggedIn="loggedOut"/></div>
    <img className="whyhostfront-img4" src="https://s3.amazonaws.com/maisie-files/landing/back.png" />
    <div className="whyhostfront-title">
      <div className="whyhostfront-forpros">
        <span>For Therapists:</span>
      </div>
      Grow your practice by
      <br />
      practicing your interests.
    </div>
    <a className="row-c-c">
      <span>Find out more</span>
      <svg viewBox="0 0 12 11">
          <g id="Web-V2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fillOpacity="1">
              <g id="Group-45-Copy" transform="translate(-97.000000, -5.000000)" fillRule="nonzero">
                  <g id="Group-42-Copy">
                      <g id="external" transform="translate(97.000000, 5.000000)">
                          <path d="M11.9242627,5.11141387 L7.85044408,0.494768744 C7.75037308,0.378613419 7.63172715,0.288769457 7.49085664,0.222480085 C7.35198565,0.157131626 7.20647693,0.125 7.04920131,0.125 C6.76147699,0.125 6.52423017,0.214662342 6.31487965,0.402456309 C6.11859585,0.578529015 6.02887037,0.763760205 6.02887037,0.991164835 C6.02887037,1.11640514 6.05716642,1.24419632 6.1148453,1.37822952 C6.17751943,1.52387061 6.2738806,1.66480943 6.42196903,1.82532649 L8.30126606,4.00711831 L1.30350281,4.00711831 C0.992222757,4.00711831 0.744310273,4.10886961 0.531526196,4.32385398 C0.317638825,4.53995305 0.215909091,4.7933023 0.215909091,5.11113722 C0.215909091,5.43971595 0.317234767,5.69663424 0.529923949,5.90955128 C0.74280377,6.12265916 0.991396495,6.22365092 1.30350281,6.22365092 L8.40741461,6.22365092 L6.39073063,8.26118841 C6.27306332,8.38007246 6.18402556,8.51330732 6.12160509,8.6638518 C6.05954015,8.81353882 6.02887037,8.96742086 6.02887037,9.12917215 C6.02887037,9.40959543 6.12084952,9.63028804 6.31659907,9.82045506 C6.51577264,10.0139484 6.75117208,10.1057692 7.04920131,10.1057692 C7.20186854,10.1057692 7.34416004,10.0746173 7.48099532,10.0112526 C7.62084796,9.94649064 7.7458807,9.85273191 7.85453305,9.73123486 L11.7866394,5.26763976 L11.9242627,5.11141387 Z" id="➜"></path>
                      </g>
                  </g>
              </g>
          </g>
      </svg>
    </a>
  </div>

const HostReasons = () =>
  <div className="whyhostreasons">
    <div style={{height: 50}} />
    <div className="whyhost-f-title col-c-c">
      <div />
      <span>Hosting on Maisie takes your business to the next level</span>
    </div>
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
      <div className="whyhostplants">
        <img src="../static/shared/plantsncouch.png" />
        <h1>Maisie works with your practice</h1>
        <h1></h1>
      </div>
      <div className="whyhost-f__reasons row">
        {r}
      </div>
      <GrowTogether />
      <Footer />
    </div>
  )
}
