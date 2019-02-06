import Footer from '../shared/components/footer.js';
import Header from '../shared/components/app_header/index.js';
import GrowTogether from '../modules/landing/components/growtogether.js';

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
      <div className="whyhost-f__head"><Header whitelogo={true} noheader={true} non_app={true} /></div>
      <div className="whyhost-f__front" style={{backgroundImage: "url('../../static/shared/plantsncouch.png')", backgroundSize: "cover", backgroundPosition: "center"}} />
      <div className="whyhost-f-title col-c-c">
        <div />
        <span>Hosting on Maisie takes your business to the next level</span>
      </div>
      <div className="whyhost-f__reasons row">
        {r}
      </div>
      <GrowTogether />
      <Footer />
    </div>
  )
}
