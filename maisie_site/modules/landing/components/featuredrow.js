import Card from "../../../shared/components/card/index.js";

export default (props) => {
  const MapCards = (props) => props.children.map((b, index) =>
    <Card
      title={b.title}
      price={b.price}
      image_url={b.image_url}
      href={`circle/${b.id}`}
      low={b.min}
      high={b.max}
      high={"12"}
      spots={"12"}
      key={index}
    />
  )
  return(
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
  )
}
