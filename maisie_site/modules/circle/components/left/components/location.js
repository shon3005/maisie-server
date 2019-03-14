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
  const space = obj[props.type]
  return(
    <div className="circlecal row-sb-c">
      <div className="circlecal__left loc col-sa">
        <div className="circledetails__item row-fs-c">
          <img src={obj[props.type || 'private space']["img"]} />
          <div className="col">
            <span className="tag dark_theme_tag_text">type</span>
            <span className="text dark_theme_primary_text">{obj[props.type || 'private space']["text"]}</span>
          </div>
        </div>
        <div className="circledetails__item row-fs-c">
          <img src="https://s3.amazonaws.com/maisie-files/circle/location.svg" />
          <div className="col">
            <span className="tag dark_theme_tag_text">location</span>
            <span className="text dark_theme_primary_text">{props.neighborhood}</span>
          </div>
        </div>
      </div>
      <div className="circlecal__spacer"/>
      <div className="circlecal__location col-c-c">Maps coming soon</div>

    </div>
  )
}
