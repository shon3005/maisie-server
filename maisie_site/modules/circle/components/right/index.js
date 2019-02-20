import Socials from './components/socials.js';
import Dots from './components/dots.js';
import Divider from './components/divider.js';
import Button from '../../../../shared/components/button.js';
const Sub = (props) => <div className="circle_left__subhead">{props.children}</div>
var classNames= require('classnames')
function handleClick() {
  document.getElementById("askmodal").classList.remove('hide');
}

export default (props) => {
  return <div className="circle_right col-fs-c">
    <div className={classNames(["circle_right__inner", "col-fs-c", { "dark_theme": props.dark }])}>
      <div className="circle_right__inner_cont col-fs-c">
        <div className="circle_right__inner_cont-price col-fs-c dark_theme_primary_text">
          <span><span className="large">{"$" + props.circle.price}</span> per session</span>
        </div>
        <div style={{height: 10}} />
        <div className="circle_right__inner_cont-price col-fs-c dark_theme_primary_text">
          <span className="lower">{props.circle.min + "-" + props.circle.max + " members"}</span>
        </div>
        <div style={{height: 25}} />
        <div className="circle_right__inner_cont-join">
          <Button kind="primary" weight="purple" className={classNames({
            "requested": props.status === "requested",
            "joined": props.status === "joined",
            "col-c-c": true, })}
          >{
            props.status === "requested"
              ? "Requested"
              : props.status === "joined"
                ? "Already joined"
                : "Request to join"
          }</Button>
        </div>
        <div onClick={handleClick} className="circle_right__inner_cont-ask col-c-c">Ask a question</div>
      </div>
      <div className="col-fs-c"><Socials dark={props.dark} /></div>
    </div>
  </div>
}
