import React, { Component } from "react";
import SignUp from '../../shared/components/signup/index.js';
import FrontPage from './components/frontpage.js';
import WhyCommunity from './components/whycommunity.js';
import HowItWorks from './components/howitworks.js';
import Details from './components/details.js';
import DoubleWindow from './components/doublewindow/index.js';
import Footer from '../../shared/components/footer.js';
import FeaturedRow from './components/featuredrow.js';

export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <div className="landing container">
            <FrontPage />
            <FeaturedRow />
            <div className="landing-grow row-sb-c">
              <img src="../../static/shared/campfire_o.png" />
              <div className="landing-grow_cont col">
                <img src="../../static/shared/campfire.svg" />
                <span className="landing-grow_cont-text">
                  At Maisie, we believe that everyone should be able to exercise their mind as they would their body.
                  We also believe that humans have a natural need for connection. Our mission at Maisie is to give customers
                  both of these things in a way that works for us all.
                </span>
                <div className="row">
                  <a className="one" href="home">Explore Maisie</a>
                  <a className="two" href="mailto:say@heymaisie.com">Ask a question</a>
                </div>
              </div>
            </div>
            <WhyCommunity />
            <HowItWorks />
            <DoubleWindow />
            <Footer />
        </div>
      </div>
    )
  }
}


// <span className="landing-grow_cont-title">We were meant to grow <span className="purple">together</span></span>
