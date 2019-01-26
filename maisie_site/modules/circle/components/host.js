export default (props) =>
  <div className="circlehost row-c">
    <div className="circlehost-img col-c-c"><img src={props.img} /></div>
    <div className="circlehost__inner col">
      <div className="circlehost__inner_name row-fs-c">
        <span>{props.name}</span>
        <div className="col-c-c"><span>{props.license}</span></div>
      </div>
      <div className="circlehost__inner_education row-fs-c">
        <img src="../../../static/circle/book.svg" />
        <span>{props.education}</span>
      </div>
      <span className="circlehost__inner_description">{props.description}</span>
    </div>
  </div>
