import Header from '../../shared/components/header/index.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from '../landing/components/featuredrow.js';
import FullPageSpinner from '../../shared/components/fullpagespinner.js';

export default (props) => {
  return (
    <div className="discover col-fs-c">
      <Header loggedIn={"loggedIn"}/>
      <div className="discover__content col-fs-c">
      {/* <FullPageSpinner color={"dark"} /> */}
      <FeaturedRow circles={props.circles}/>
      </div>
      <Footer />
    </div>
  );
}
