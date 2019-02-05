import SignUp from '../../shared/components/signup/index.js';
import FrontPage from './components/frontpage.js';
import WhyCommunity from './components/whycommunity.js';
import HowItWorks from './components/howitworks.js';
import Details from './components/details.js';
import DoubleWindow from './components/doublewindow/index.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from './components/featuredrow.js';

export default () =>
  <div>
    <div className="landing container">
        <FrontPage />
        <FeaturedRow />
        <div className="landing-grow row-fe-c" style={{backgroundImage: "url('../../static/shared/campfire_o.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className="landing-grow_cont col-c">
            <img src="../../static/shared/campfire.svg" />
            <span className="landing-grow_cont-text">
              Humans are meant to be <em>together</em>. Learn together. Laugh together. Grow together.
              Through powerful experiences and meaningful connections with others, Maisie's mission is to let everyone to maintain their mental wellbeing using the power of <em>together</em>.
            </span>
            <div className="row">
              <a className="one" href="home">Explore Maisie</a>
              <a className="two" href="mailto:say@heymaisie.com">Ask a question</a>
            </div>
          </div>
        </div>
        <WhyCommunity />
        <HowItWorks />
        <DoubleWindow />
        <Footer />
    </div>
  </div>


// <span className="landing-grow_cont-title">We were meant to grow <span className="purple">together</span></span>
