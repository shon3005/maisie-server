import React from "react";
import Header from '../../../shared/components/header/index.js';
import Button from '../../../shared/components/button.js';
export default props =>
  <div className="front">
    <div className="front-header"><Header trnsp loggedIn="loggedOut"/></div>
    <div className="front__text">
      <span className="front__text-top">
        Wellness that
      <br />
        works together.
      </span>
      <div style={{
        height: 50
      }} />
      <span className="front__text-middle">
        Maisie offers affordable experiences that
      <br />
        build community and combat loneliness.
      </span>
      <div style={{
        height: 50
      }} />
      <div style={{display: "inline-block"}} className="col-fs">
        <Button kind="primary" weight="purple">Get started with Maisie</Button>
      </div>
    </div>
    <img className="front-background" src="../../../static/shared/front_people.svg" />
  </div>
