const Links = (props) => [
  "twitter",
  "insta",
  "fb",
  "email"
].map((x, index) =>
  <div className="circlesocials__in_social dark_theme_social col-c-c" style={{backgroundImage: `url(../../../static/shared/${x}_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} key={index} />
)

export default (props) =>
  <div className="circlesocials col-fs-c">
    <div className="circlesocials__in row-sb-c">
      <Links dark={props.dark} />
    </div>
  </div>
