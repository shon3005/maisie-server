import Cards from './components/cards/index.js';
import Requests from './components/requests/index.js';
import FeaturedRow from '../../landing/components/featuredrow.js';
import LargeText from '../../../shared/components/text/largeText.js';

export default (props) =>
  <div className="hostcircles__inner">
    <div className="hostcircles__inner-title row-sb-c">
      <LargeText>Circles I'm Hosting</LargeText>
      <div className="row-fe-c">
        <Requests requests={props.requests} />
        <a href="/create" className="col-c-c">Start a Circle</a>
      </div>
    </div>
    <Cards />
    {/* <FeaturedRow circles={} /> */}
  </div>
