import Button from '../button.js';

export default props =>
  <div className="newfooter row-sb">
    <div className="newfooter__in col-fs">
      <img src="https://s3.amazonaws.com/maisie-files/header/logo_nocircle.svg" />
      <div className="col" style={{marginLeft: 5, marginBottom: 10}}>
      <Button kind="link" href="https://calendly.com/matthew-maisie">Talk to us</Button>
      </div>
      <div className="circlesocials col-fs-c">
        <div className="circlesocials__in row">
          <a href="https://twitter.com/sayheymaisie">
            <div className="circlesocials__in_social dark_theme_social col-c-c" style={{backgroundImage: `url(https://s3.amazonaws.com/maisie-files/shared/twitter_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} />
          </a>
          <a href="https://instagram.com/sayheymaisie">
            <div className="circlesocials__in_social dark_theme_social col-c-c" style={{backgroundImage: `url(https://s3.amazonaws.com/maisie-files/shared/insta_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} />
          </a>
          <a href="https://facebook.com/sayheymaisie">
            <div className="circlesocials__in_social dark_theme_social col-c-c" style={{backgroundImage: `url(https://s3.amazonaws.com/maisie-files/shared/fb_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} />
          </a>
          <a href="mailto:say@heymaisie.com">
            <div className="circlesocials__in_social dark_theme_social col-c-c" style={{backgroundImage: `url(https://s3.amazonaws.com/maisie-files/shared/email_${props.dark ? "lightpurple" : "lightgray"}.svg)`, backgroundRepeat: "no-repeat", backgroundSize: "20px 20px", backgroundPosition: "center"}} />
          </a>
        </div>
      </div>
      <div style={{height: 20}} />
      <span>© 2019 Maisie, Inc. All rights reserved.</span>
    </div>
    <div className="newfooter__in col-fs">
      <h1>Product</h1>
      <div className="newfooter__in-link"><a href="/">For Individuals</a></div>
      <div className="newfooter__in-link"><a href="/">For Employers</a></div>
      <div className="newfooter__in-link"><a href="mailto:providers@heymaisie.com">For Therapists</a></div>
    </div>
    <div className="newfooter__in col-fs">
      <h1>Company</h1>
      <div className="newfooter__in-link"><a href="/about">About Us</a></div>
      <div className="newfooter__in-link"><a href="https://angel.co/maisie-1">Work at Maisie</a></div>
      <div className="newfooter__in-link"><a href="mailto:say@heymaisie.com">Contact Us</a></div>
    </div>
    <div className="newfooter__in col-fs">
      <h1>Resources</h1>
      <div className="newfooter__in-link"><a href="/support">Product Support</a></div>
      <div className="newfooter__in-link"><a href="/terms">Terms of Service</a></div>
      <div className="newfooter__in-link"><a href="/privacy">Privacy Policy</a></div>
    </div>
  </div>
