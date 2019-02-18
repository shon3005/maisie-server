import Left from './components/left/index.js';
import Right from './components/right/index.js';

var classNames = require('classnames');

import { Query } from 'react-apollo';
import getCircle from '../../shared/services/get-circle';

export default (props) => {
  return (
    <Query query={getCircle} variables={{ id: props.id }}>
      {getCircle => {
        return <div className={classNames(["circle__inner", "col-fs-c", {"dark_theme": props.dark}])}>
          <div className={classNames(["circle__inner-img", {"dark_theme": props.dark}])}>
            <div className="circle__inner-img-shadow" />
            {props.dark ? <div className="circle__inner-img-bshadow" /> : null}
            <div className="circle__inner-img-filter" />
            {props.circle && props.circle.image_url ? <div className="circle__inner-img-img" style={{backgroundImage: `url(${props.circle.image_url})`, backgroundSize: "cover", backgroundPosition: "center"}} /> : null}
          </div>
          <div className={classNames(["circle__inner_cont", "row-c", {"dark_theme": props.dark}])}>
            <Left
              circle={getCircle.data.circle}
              user={props.user}
              id={props.id}
              dark={props.dark} // sets color scheme
              d={props.d} // sets dummy data for component
            />
            <div className="circle__inner_cont-spcr" />
            <Right
              circle={getCircle.data.circle}
              dark={props.dark} // sets color scheme
              d={props.d} // sets dummy data for component
              status={""} // adjusts join button when status changes
            />
          </div>
        </div>
      }}
    </Query>
  );
}