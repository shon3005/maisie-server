import Circles from '../modules/circles/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';

export default () =>
  <div className="mycircles col-fs-c">
    <Header />
    <Circles />
    <Footer />
  </div>
