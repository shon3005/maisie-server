import Socials from './components/socials.js';
const Sub = (props) => <div className="circle_left__subhead">{props.children}</div>

export default (props) =>
  <div className="circle_right col-fs-c">
    <div className="circle_right__inner col-fs-c">
      <div className="circle_right__inner_cont col">
        <Sub>Price</Sub>
        <div className="circle_right__inner_cont-price">
          <span><span className="large">$45</span> per session</span>
        </div>
        <div style={{height: 25}} />
        <div className="circle_right__inner_cont-join col-c-c">Join this Circle</div>
        <div style={{height: 10}} />
      </div>
      <div className="col-fs-c"><Socials /></div>
    </div>
  </div>
