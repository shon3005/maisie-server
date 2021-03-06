const Full = (props) => {
  return (<div className="circlehost">
    <div className="circlehost-img col-c-c" style={{backgroundImage: `url(${props.host.imageUrl || 'https://s3.amazonaws.com/maisie-files/shared/profile-default.svg'})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat'}} />
    <div className="circlehost__inner">
      <div className="circlehost__inner_name">
        <span className="dark_theme_title_text">{props.host.name}</span>
        <div className="col-c-c"><span>{props.host.license}</span></div>
      </div>
      <div className="circlehost__inner_education row-fs-c">
        <img src="https://s3.amazonaws.com/maisie-files/circle/book.svg" />
        <span className="dark_theme_primary_text">{props.host.education}</span>
      </div>
      <span className="circlehost__inner_description dark_theme_primary_text">{props.host.description}</span>
    </div>
  </div>);
}

const Abb = (props) =>
  <div className="hostabb row-fs-c">
    <div className="hostabb__thumb" style={{backgroundImage: `url(${props.host.imageUrl || 'https://s3.amazonaws.com/maisie-files/shared/profile-default.svg'})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: 'no-repeat'}} />
    <div className="hostabb__text col">
      <span className="hostabb__text-tag dark_theme_tag_text">hosted by</span>
      <div className="circlehost__inner_name row-fs-c" style={{marginTop: 5}}>
        <span className="dark_theme_title_text">{props.host.name}</span>
        <div className="col-c-c abb"><span>{props.host.license}</span></div>
      </div>
    </div>
  </div>

export default (props) => props.abb ? <Abb host={props.host} /> : <Full host={props.host} />
