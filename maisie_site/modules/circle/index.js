import Back from './components/back.js';
import Left from './components/left/index.js';
import Right from './components/right/index.js';

export default (props) =>
  <div className="circle__inner col-fs-c">
    <Back />
    <div className="circle__inner-img" style={{backgroundImage: `url(${props.d.img})`, backgroundSize: "cover", backgroundPosition: "center"}} />
    <div className="circle__inner_cont row-c">
      <Left d={props.d} />
      <div className="circle__inner_cont-spcr" />
      <Right d={props.d} />
    </div>
  </div>
