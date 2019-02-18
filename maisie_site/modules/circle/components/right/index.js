import Socials from './components/socials.js';
import Dots from './components/dots.js';

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
        <div style={{height: 20}} />
        <div className="dark_theme_dark_back circle_right__inner-joined col-c-c">
          <span className="dark_theme_tag_text">{props.d.num_joined + " joined (" + (props.circle.min - props.d.num_joined) + " more needed)"}</span>
          <div className="row-sa-c">
            <Dots d={props.d} />
          </div>
        </div>
        <div style={{height: 25}} />
        <div className="circle_right__inner_cont-join">
          <div className={classNames({
            "requested": props.status === "requested",
            "joined": props.status === "joined",
            "col-c-c": true,
          })}>{
            props.status === "requested"
              ? "Requested"
              : props.status === "joined"
                ? "Already joined"
                : "Request to join"
          }</div>
        </div>
        <div onClick={handleClick} className="circle_right__inner_cont-ask col-c-c">Ask a question</div>
      </div>
      <div className="col-fs-c"><Socials dark={props.dark} /></div>
    </div>
  </div>
}