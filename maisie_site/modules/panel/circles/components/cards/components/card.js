var classNames = require('classnames');

export default (props) => {
  return (
    <a href={!props.data.pending ? '/circle/' + props.data.id : null} className={classNames(["mycirclescard", "row-sb-c", { "non-click": props.data.pending }])}>
      <div className="mycirclescard__cont row-fs-c">
        <div className="mycirclescard__cont-img" style={{backgroundImage: `url(${props.data.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}} />
        <div className="mycirclescard__cont_text col">
          <span className="mycirclescard__cont_text-title">{props.data.title}</span>
          <span className="mycirclescard__cont_text-date">{"every " + props.data.day + " at " + props.data.hour + ":" + props.data.minute + props.data.ampm}</span>
          <span className="mycirclescard__cont_text-eco"><span className="price">{"$ " + props.data.price}</span><span>{" • " + props.data.min + " people minimum"}</span></span>
        </div>
      </div>
      <div className="mycirclescard__right col-fs-fe">
        <div className="row-fe-c">
          <div className={classNames(["mycirclescard-pending", {
            pending: props.data.pending,
          }])}>
            <div>{ props.data.pending === true ? "Pending" : null }</div>
          </div>
          <div className={classNames(["mycirclescard-pending", {
            host: props.user.role === "host",
            member: props.user.role === "user",
          }])}>
            <div>{ props.user.id === props.data.user.id ? "Host" : props.user.role === "user" ? "Member" : null }</div>
          </div>
        </div>
        <div className="mycirclescard__right-pay"><em>{props.user.role === "user" ? "Last payment: 2/07/19" : null}</em></div>
      </div>
    </a>
  );
}
