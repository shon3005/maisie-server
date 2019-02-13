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
  const space = obj[props.type]
  return(
    <div className="circlelocation row-sa-c">
      <div className="circlelocation__inner col">
        <div className="circlelocation__inner-type row"><img src={space.img} /><span>{space.text}</span></div>
        <div className="circlelocation__inner-location row"><div className="col-c-c"><img src="../../../static/circle/location.svg" /></div><span>{props.neighborhood}</span></div>
      </div>
    </div>
  )
}
