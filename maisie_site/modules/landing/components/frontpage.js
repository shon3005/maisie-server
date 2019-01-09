import React, { Component } from "react";
import Header from '../../../shared/components/header.js';
import SocialButtons from '../../../shared/components/socialButtons.js';
import EmailCapture from '../../../shared/components/emailCapture.js';

export default (props) =>
  <div className="front col-c-c">
    <div className="front__header">
      <Header links={[["FAQ", "/faq"],["contact us", "mailto:say@heymaisie.com"]]} />
    </div>
    <div className="front__content col-sb-c">
      <div className="front__content_in">
        <span className="front__content_in-title">Community-based counseling</span><br />
        <span className="front__content_in-desc">Group therapy for stress, self-esteem, and sexual wellness</span>
      </div>
      <div className="front__content-prompt col-sb-c">
        <EmailCapture color={1} onEmailEntry={(email) => props.onEmailEntry(email)} />
        <div style={{height: '15vh'}} />
        <div className="socialbuttons row-sb-c"><SocialButtons /></div>
      </div>
    </div>
    <div className="front__background col-c-c"><img src="../../static/landing/back.png" /></div>
  </div>
