const Full = (props) =>
  <div className="circlehost row-c">
    <div className="circlehost-img col-c-c"><img src={props.host.thumb} /></div>
    <div className="circlehost__inner col">
      <div className="circlehost__inner_name row-fs-c">
        <span>{props.host.name}</span>
        <div className="col-c-c"><span>{props.host.license}</span></div>
      </div>
      <div className="circlehost__inner_education row-fs-c">
        <img src="../../../static/circle/book.svg" />
        <span>{props.host.education}</span>
      </div>
      <span className="circlehost__inner_description">{props.host.description}</span>
    </div>
  </div>

const Abb = (props) =>
  <div className="hostabb row">
    <div className="hostabb__thumb" style={{backgroundImage: `url(${props.host.thumb})`, backgroundSize: "cover", backgroundPosition:"center"}} />
    <div className="hostabb__text col">
      <span className="hostabb__text-tag">hosted by</span>
      <span className="hostabb__text-name">{props.host.name}</span>
    </div>
  </div>

export default (props) => props.abb ? <Abb host={props.host} /> : <Full host={props.host} />
