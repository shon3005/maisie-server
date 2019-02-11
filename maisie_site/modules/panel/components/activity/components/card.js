var classNames = require('classnames');

export default (props) =>
  <div className={classNames(["hostcard", "row-sb-c", { "non-click": props.data.pending }])}>
    <div className="hostcard__cont row-fs-c">
      <div className="hostcard__cont-img" style={{backgroundImage: `url(${props.data.img})`, backgroundSize: "cover", backgroundPosition: "center"}} />
      <div className="hostcard__cont_text col">
        <span className="hostcard__cont_text-title">{props.data.title}</span>
        <span className="hostcard__cont_text-date">{"every " + props.data.day + " at " + props.data.time}</span>
        <span className="hostcard__cont_text-eco"><span className="price">{"$ " + props.data.price}</span><span>{" • " + props.data.min + " people minimum"}</span></span>
      </div>
    </div>
    <div className={classNames(["hostcard-pending", {hide: !props.data.pending}])}>Pending</div>
  </div>
