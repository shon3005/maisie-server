import Back from '../../../../modules/circle/components/back.js';

export default (props) =>
  <div className="header_l row-fs-c">
    {props.circle ? <Back /> : null}
    <a href="/"><img src={props.circle ? "https://s3.amazonaws.com/maisie-files/header/logo_nocircle_white.svg" : "https://s3.amazonaws.com/maisie-files/header/logo_nocircle.svg"} /></a>
    <div className="header_l-barrier" style={{display: props.status ? "flex" : "none"}} />
    <span>{props.status}</span>
  </div>
