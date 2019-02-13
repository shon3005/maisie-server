import withPageNoSide from '../shared/withPageNoSide.js';
import Profile from '../modules/profile/index.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';

export default () =>
<div className="profile">
  <Header />
  <Profile />
  <Footer />
</div>
