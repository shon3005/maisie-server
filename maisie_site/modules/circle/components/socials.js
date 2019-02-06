
const Links = () => [
  "twitter",
  "insta",
  "fb",
  "email"
].map((x, index) =>
  <div className="circlesocials__in_social col-c-c" style={{backgroundImage: `url(../../../static/shared/${x}_lightgray.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} key={index} />
)

export default () =>
  <div className="circlesocials col-fs-c">
    <span>Share this Circle</span>
    <div className="circlesocials__in row-sb-c">
      <Links />
    </div>
  </div>
