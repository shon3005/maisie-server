import SignUp from '../../shared/components/signup/index.js';
import FrontPage from './components/frontpage.js';
import WhyCommunity from './components/whycommunity.js';
import HowItWorks from './components/howitworks.js';
import Details from './components/details.js';
import DoubleWindow from './components/doublewindow/index.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from './components/featuredrow.js';
import GrowTogether from './components/growtogether.js';

export default () =>
  <div>
    <div className="landing container">
        <FrontPage />
        <FeaturedRow />
        <GrowTogether />
        <WhyCommunity />
        <HowItWorks />
        <DoubleWindow />
        <Footer />
    </div>
  </div>


// <span className="landing-grow_cont-title">We were meant to grow <span className="purple">together</span></span>
