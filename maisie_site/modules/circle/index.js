import Left from './components/left/index.js';
import Right from './components/right/index.js';
import { ApolloConsumer } from 'react-apollo';
import Back from './components/back.js';

import getCircle from '../../shared/services/get-circle';
var classNames = require('classnames');
const getCircleDetails = (circleId, client) => {
  getCircle(circleId, client);
}

export default (props) =>
  <div className={classNames(["circle__inner", "col-fs-c", {"dark_theme": props.dark}])}>
    {/* <ApolloConsumer>
      {client => (
        <div>
          {getCircleDetails(1, client)}
        </div>
      )}
    </ApolloConsumer> */}
    <div className={classNames(["circle__inner-img", {"dark_theme": props.dark}])}>
      <div className="circle__inner-img-shadow" />
      {props.dark ? <div className="circle__inner-img-bshadow" /> : null}
      <div className="circle__inner-img-filter" />
      <div className="circle__inner-img-img" style={{backgroundImage: `url(${props.d.img})`, backgroundSize: "cover", backgroundPosition: "center"}} />
    </div>
    <div className={classNames(["circle__inner_cont", "row-c", {"dark_theme": props.dark}])}>
      <Left
        dark={props.dark} // sets color scheme
        d={props.d} // sets dummy data for component
      />
      <div className="circle__inner_cont-spcr" />
      <Right
        dark={props.dark} // sets color scheme
        d={props.d} // sets dummy data for component
        status={""} // adjusts join button when status changes
      />
    </div>
  </div>
