import Card from "../../../shared/components/card/index.js";

export default () => {
  const MapCards = (props) => props.children.map((b, index) =>
    <Card
      title={b.title}
      price={b.price}
      img={b.img}
      href={b.href}
      low={b.low}
      high={b.high}
      spots={b.spots}
      key={index}
    />
  )
  const DATA = [
    {
      "title": "Weekly Walk and Talk",
      "price": 25,
      "img": "https://www.simplehealthsl.com/wp-content/uploads/walk-talk-health-coaching-cover.jpg",
      "href": "circles/001",
      "low": 4,
      "high": 6,
      "spots": 2,
    }, {
      "title": "Example Group Two",
      "price": 60,
      "img": "https://matthewkochakian.com/myface.png",
      "href": "circles/001",
      "low": 5,
      "high": 8,
      "spots": 1,
    }, {
      "title": "Example Group Two",
      "price": 60,
      "img": "https://matthewkochakian.com/myface.png",
      "href": "circles/001",
      "low": 5,
      "high": 8,
      "spots": 1,
    }, {
      "title": "Example Group Two",
      "price": 60,
      "img": "https://matthewkochakian.com/myface.png",
      "href": "circles/001",
      "low": 5,
      "high": 8,
      "spots": 1,
    }, {
      "title": "Example Group Two",
      "price": 60,
      "img": "https://matthewkochakian.com/myface.png",
      "href": "circles/001",
      "low": 5,
      "high": 8,
      "spots": 1,
    }, {
      "title": "Example Group Two",
      "price": 60,
      "img": "https://matthewkochakian.com/myface.png",
      "href": "circles/001",
      "low": 5,
      "high": 8,
      "spots": 1,
    }, {
      "title": "Example Group Two",
      "price": 60,
      "img": "https://matthewkochakian.com/myface.png",
      "href": "circles/001",
      "low": 5,
      "high": 8,
      "spots": 1,
    },
  ]
  return(
    <div className="featuredrow col-c-c">
      <div className="featuredrow_i col-sb-c">
        <div className="featuredrow_i__h row">
          <span>Circles in New York City</span>
        </div>
        <div className="featuredrow_i__cont row-fs-c">
          <MapCards>{DATA}</MapCards>
        </div>
        <div className="featuredrow_i-divider" />
      </div>
    </div>
  )
}
