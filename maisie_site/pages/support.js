import SupportModule from '../modules/support/index.js';
import Header from '../shared/components/header/index.js';
import Footer from '../shared/components/footer.js';
import { connect } from 'react-redux';

const Support = () =>
<div className="support col-fs-c">
  <Header />
  <SupportModule />
  <Footer />
</div>

const mapStateToProps = (state) => {
  return process.browser ? 
    { user: state.user.user } :
    {};
}
  
export default connect(mapStateToProps)(Support);
