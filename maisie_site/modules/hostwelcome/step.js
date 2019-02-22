import Button from '../../shared/components/button.js';
export default (props) =>
  <div className="hostwelcome__step">
    <div className="hostwelcome__step_cont row-fs-c">
      <img src={props.img} />
      <div className="col">
        <span className="tag">{"step " + props.num}</span>
        <span className="text">{props.text}</span>
      </div>
    </div>
    <div className="hostwelcome__step-prompt col-c-fe">
      <Button kind="link" href={props.href}>{props.href_title}</Button>
    </div>
  </div>
