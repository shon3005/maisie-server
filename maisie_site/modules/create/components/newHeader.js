export default (props) =>
  <div className="newheader row-fs-c">
    <img src="../../static/header/logo_nocircle.svg" />
    <div className="newheader-barrier" />
    <span>{props.status}</span>
  </div>
