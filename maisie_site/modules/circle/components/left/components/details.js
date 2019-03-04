var moment = require('moment');

export default (props) => {
  const obj = {
    "private space": {
      "img": "https://s3.amazonaws.com/maisie-files/circle/private.svg",
      "text": "private space",
    },
    "shared space": {
      "img": "https://s3.amazonaws.com/maisie-files/circle/shared.svg",
      "text": "shared space",
    },
    "outdoors": {
      "img": "https://s3.amazonaws.com/maisie-files/circle/outdoors.svg",
      "text": "outdoors",
    },
  }
  const ren1 = [
    {
      "img": "https://s3.amazonaws.com/maisie-files/circle/day.svg",
      "tag": "day",
      "text": '',
    }, {
      "img": "https://s3.amazonaws.com/maisie-files/circle/time.svg",
      "tag": "time",
      "text": moment(props.time).format("h:mm A").toString(),
    }, {
      "img": "https://s3.amazonaws.com/maisie-files/circle/length.svg",
      "tag": "length",
      "text": props.length === 'continuous' ? props.length : props.length + 'weeks',
    }
  ]
  const ren2 = [
    {
      "img": obj[props.type || 'private space']["img"],
      "tag": "type",
      "text": obj[props.type || 'private space']["text"],
    }, {
      "img": "https://s3.amazonaws.com/maisie-files/circle/location.svg",
      "tag": "location",
      "text": props.neighborhood,
    }, {
      "img": "",
      "tag": "",
      "text": "",
    },
  ]

  const elements = [ren1, ren2].map((arr, index) =>
    arr.map((item, index) =>
      <div className="circledetails__item row-fs-c" key={index}>
        <img src={item.img} />
        <div className="col">
          <span className="tag dark_theme_tag_text">{item.tag}</span>
          <span className="text dark_theme_primary_text">{item.text}</span>
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
