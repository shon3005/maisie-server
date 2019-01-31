import JoinCircle from './components/join_circle_button.js';
import FeaturedGroups from './components/featured_groups/index.js';
import Header from '../../shared/components/app_header/index.js';
import Card from './components/card.js';
import FeaturedRow from '../landing/components/featuredrow.js';

export default (props) =>
  <div className="discover col-fs-c">
    <Header />
    <div className="discover__content col-fs-c">
      <FeaturedRow />
    </div>
  </div>

  // 
  // <span className="discover__content-title">Welcome to Maisie</span>
  // <span className="discover__content-desc">Browse available Circles below</span>
