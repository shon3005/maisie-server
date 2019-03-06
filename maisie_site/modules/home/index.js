import Header from '../../shared/components/header/index.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from '../landing/components/featuredrow.js';
import FullPageSpinner from '../../shared/components/fullpagespinner.js';
import Button from '../../shared/components/button.js';

export default (props) => {
  return (
    <div className="discover col-fs-c">
      <Header loggedIn={"loggedIn"}/>
      <div className="discover__content col-fs-c">
        {/* <FullPageSpinner color={"dark"} /> */}
        <FeaturedRow circles={props.circles}/>
        <div className="discover__content_newcity">
          <div className="col" style={{backgroundImage: 'url(../../static/shared/city_illo.svg)', backgroundPosition: "bottom", backgroundSize: "cover"}}>
            <span className="large">Want to see Maisie in your city?</span>
            <br />
            <Button kind="link" weight="light" href="mailto:say@heymaisie.com">Suggest it here!</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
