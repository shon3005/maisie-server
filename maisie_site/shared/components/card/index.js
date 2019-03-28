export default (props) =>
  <a className="circlecard col" href={props.href}>
    <div className="circlecard__img col-c-c" style={{backgroundImage: `url(${props.image_url})`, backgroundSize: "cover", backgroundPosition: "center" }} />
    <div className="circlecard__cont col">
      <span className="circlecard__cont-title lim_one_line">{props.title}</span>
      <span className="circlecard__cont-spots lim_one_line">{props.spots + " spots left (" + props.low + "-" + props.high + " total)"}</span>
      <span className="circlecard__cont-price lim_one_line">{"$" + props.price.toString()} {props.subscription ? " per session" : " total"}</span>
    </div>
  </a>