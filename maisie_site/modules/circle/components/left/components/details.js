var moment = require('moment');

export default (props) => {
  const obj = {
    "private_space": {
      "img": "../../../static/circle/private.svg",
      "text": "private space",
    },
    "shared_space": {
      "img": "../../../static/circle/shared.svg",
      "text": "shared space",
    },
    "outdoors": {
      "img": "../../../static/circle/outdoors.svg",
      "text": "outdoors",
    },
  }
  const ren1 = [
    {
      "img": "../../../static/circle/day.svg",
      "tag": "day",
      "text": moment(props.start).format("dddd").toString(),
    }, {
      "img": "../../../static/circle/time.svg",
      "tag": "time",
      "text": moment(props.start).format("h:mm A").toString(),
    }, {
      "img": "../../../static/circle/length.svg",
      "tag": "length",
      "text": props.length.toString() + " weeks",
    }
  ]
  const ren2 = [
    {
      "img": obj[props.type]["img"],
      "tag": "type",
      "text": obj[props.type]["text"],
    }, {
      "img": "../../../static/circle/location.svg",
      "tag": "location",
      "text": props.neighborhood,
    }, {
      "img": "../../../static/circle/outdoors.svg",
      "tag": "length",
      "text": "outdoors",
    },
  ]

  const elements = [ren1, ren2].map((arr, index) =>
    arr.map((item, index) =>
      <div className="circledetails__item row-fs-c" key={index}>
        <img src={item.img} />
        <div className="col">
          <span className="tag">{item.tag}</span>
          <span className="text">{item.text}</span>
        </div>
      </div>
    )
  )

  return(
    <div>
      <div className="circledetails row-sa-c">
        {elements[0]}
      </div>
      <div className="circledetails row-sa-c" style={{marginTop: 20}}>
        {elements[1]}
      </div>
    </div>
  )
}
