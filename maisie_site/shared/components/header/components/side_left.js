export default (props) =>
  <div className="header_l row-fs-c">
    <a href="/"><img src="../../static/header/logo_nocircle.svg" /></a>
    <div className="header_l-barrier" style={{display: props.status ? "flex" : "none"}} />
    <span>{props.status}</span>
  </div>
