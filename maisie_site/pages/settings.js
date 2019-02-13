import Settings from '../modules/settings/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';

export default () =>
  <div className="settings">
    <Header />
    <Settings />
    <Footer />
  </div>
