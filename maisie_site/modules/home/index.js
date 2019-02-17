import Header from '../../shared/components/header/index.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from '../landing/components/featuredrow.js';

export default (props) => {
  return (
    <div className="discover col-fs-c">
      <Header loggedIn={"loggedIn"}/>
      <div className="discover__content col-fs-c">
        <FeaturedRow circles={props.circles}/>
      </div>
      <Footer />
    </div>
  );
}
