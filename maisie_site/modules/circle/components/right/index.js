import Socials from './components/socials.js';
import Dots from './components/dots.js';

const Sub = (props) => <div className="circle_left__subhead">{props.children}</div>

function handleClick() {
  document.getElementById("askmodal").classList.remove('hide');
}

export default (props) =>
  <div className="circle_right col-fs-c">
    <div className="circle_right__inner col-fs-c">
      <div className="circle_right__inner_cont col-fs-c">
        <div className="circle_right__inner_cont-price col-fs-c">
          <span><span className="large">{"$" + props.d.price}</span> per session</span>
        </div>
        <div style={{height: 20}} />
        <div className="circle_right__inner-joined col-c-c">
          <span>{props.d.num_joined + " joined (" + (props.d.needed_to_start - props.d.num_joined) + " more needed)"}</span>
          <div className="row-sa-c">
            <Dots d={props.d} />
          </div>
        </div>
        <div style={{height: 25}} />
        <div className="circle_right__inner_cont-join">
          <div className="col-c-c">Request to join</div>
        </div>
        <div onClick={handleClick} className="circle_right__inner_cont-ask col-c-c">Ask a question</div>
      </div>
      <div className="col-fs-c"><Socials /></div>
    </div>
  </div>
