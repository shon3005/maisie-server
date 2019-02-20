import Left from './components/left/index.js';
import Right from './components/right/index.js';
import MobileRight from './components/mobile_right/index.js';
var classNames = require('classnames');

export default (props) => {
  return (
    <div className={classNames(["circle__inner", "col-fs-c", {"dark_theme": props.dark}])}>
      <div className={classNames(["circle__inner-img", {"dark_theme": props.dark}])}>
        <div className="circle__inner-img-shadow" />
        {props.dark ? <div className="circle__inner-img-bshadow" /> : null}
        <div className="circle__inner-img-filter" />
        {props.circle && props.circle.imageUrl ? <div className="circle__inner-img-img" style={{backgroundImage: `url(${props.circle.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}} /> : null}
      </div>
      <div className={classNames(["circle__inner_cont", "row-c", {"dark_theme": props.dark}])}>
        <Left
          circle={props.circle}
          user={props.user}
          id={props.id}
          dark={props.dark} // sets color scheme
          d={props.d} // sets dummy data for component
        />
        <div className="circle__inner_cont-spcr" />
        <Right
          circle={props.circle}
          dark={props.dark} // sets color scheme
          d={props.d} // sets dummy data for component
          //
          //
          // *** need to put logic for button status here ***
          status={""} // adjusts join button when status changes
        />
        <MobileRight
          circle={props.circle}
          dark={props.dark} // sets color scheme
          d={props.d} // sets dummy data for component
          //
          //
          // *** need to put logic for button status here ***
          status={""} // adjusts join button when status changes
        />
      </div>
    </div>
  );
}
