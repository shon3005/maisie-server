const Full = (props) =>
  <div className="circlehost row-c">
    <div className="circlehost-img col-c-c" style={{backgroundImage: `url(${props.host.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center"}} />
    <div className="circlehost__inner col">
      <div className="circlehost__inner_name row-fs-c">
        <span className="dark_theme_title_text">{props.host.name}</span>
        <div className="col-c-c"><span>{props.host.license}</span></div>
      </div>
      <div className="circlehost__inner_education row-fs-c">
        <img src="../../../static/circle/book.svg" />
        <span className="dark_theme_primary_text">{props.host.education}</span>
      </div>
      <span className="circlehost__inner_description dark_theme_primary_text">{props.host.description}</span>
    </div>
  </div>

const Abb = (props) =>
  <div className="hostabb row">
    <img src={props.host.imageUrl} className="hostabb__thumb" style={{ backgroundSize: "cover", backgroundPosition:"center"}} />
    <div className="hostabb__text col">
      <span className="hostabb__text-tag dark_theme_tag_text">hosted by</span>
      <div className="circlehost__inner_name row-fs-c" style={{marginTop: 5}}>
        <span className="dark_theme_title_text">{props.host.name}</span>
        <div className="col-c-c"><span>{props.host.license}</span></div>
      </div>
    </div>
  </div>

export default (props) => props.abb ? <Abb host={props.host} /> : <Full host={props.host} />
