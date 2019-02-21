export default (props) =>
  <div className="circlesocials col-fs-c">
    <div className="circlesocials__in row-sb-c">
      <a
        className="twitter-share-button"
        dataText="Check out this Circle on Maisie!"
        dataVia="@sayheymaisie"
        dataDnt="true"
        dataShowCount="false"
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="circlesocials__in_social dark_theme_social col-c-c"
        style={{backgroundImage: `url(../../../static/shared/twitter_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}}
      />
      <div className="circlesocials__in_social dark_theme_social col-c-c" style={{backgroundImage: `url(../../../static/shared/insta_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} />
      <div className="circlesocials__in_social dark_theme_social col-c-c" style={{backgroundImage: `url(../../../static/shared/fb_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} />
      <div className="circlesocials__in_social dark_theme_social col-c-c" style={{backgroundImage: `url(../../../static/shared/email_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} />
    </div>
  </div>
