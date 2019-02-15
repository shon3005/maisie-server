import FrontPage from './components/frontpage.js';
import WhyCommunity from './components/whycommunity.js';
import HowItWorks from './components/howitworks.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from './components/featuredrow.js';
import GrowTogether from './components/growtogether.js';

const HostCta = () =>
  <div className="landing-hostcta row-sa-c">
    <div className="landing-hostcta__cont col">
      <span className="landing-hostcta__cont-title">Are you a mental health professional?</span>
      <span className="landing-hostcta__cont-text">Learn how Maisie can help you</span>
    </div>
    <a href="/host" className="landing-hostcta-cta col-c-c">Explore hosting →</a>
  </div>

export default () =>
  <div>
    <div className="landing container">
        <FrontPage />
        <FeaturedRow />
        <WhyCommunity />
        <HowItWorks />
        <GrowTogether />
        <HostCta />
        <Footer />
    </div>
  </div>
