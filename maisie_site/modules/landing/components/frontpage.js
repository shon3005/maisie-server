import React from "react";
import Header from '../../../shared/components/header/index.js';
import SocialButtons from '../../../shared/components/socialButtons.js';

export default (props) =>
  <div className="front col-c-c">
    <div className="front__header">
      <Header trnsp loggedIn="loggedOut"/>
    </div>
    <div className="front__content col-sb-c">
      <div className="front__content_in">
        <span className="front__content_in-title">Meet Maisie.</span><br />
        <span className="front__content_in-desc">Find and host meaningful group therapy experiences</span>
        <div className="col-c-c"><div>AVAILABLE IN NYC AND SF</div></div>
        <div className="front__content_in_cta row-c-c"><a href="signup">Sign Up</a></div>
      </div>
      <div className="front__content-prompt col-sb-c">
        <div className="socialbuttons row-sb-c"><SocialButtons /></div>
      </div>
    </div>
    <div className="front__background col-c-c"><img src="https://s3.amazonaws.com/maisie-files/landing/back.png" /></div>
  </div>
