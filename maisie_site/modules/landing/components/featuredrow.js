import Card from "../../../shared/components/card/index.js";

const MapCards = (props) => {
  const children = props.children.length === 10 ? props.children.slice(0, 10) : props.children.slice(0, props.children.length);
  const x = children.map((b, index) =>
    <Card
      title={b.title}
      price={b.price}
      image_url={b.imageUrl}
      href={`circle/${b.id}`}
      low={b.min}
      high={b.max}
      spots={parseInt(b.max) - b.members.length}
      key={index}
    />
  )
  return x
}


export default (props) =>
  <div className="featuredrow col-c-c">
    <div className="featuredrow_i col-sb-c">
      <div className="featuredrow_i__h row">
        <span>Circles in San Francisco</span>
      </div>
      <div className="featuredrow_i__cont row-fs-c">
        <MapCards>{props.circles}</MapCards>
      </div>
      <div className="featuredrow_i-divider" />
    </div>
  </div>
