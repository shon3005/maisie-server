import React, { Component } from "react";
import CirclesModule from '../modules/circles/index.js';
import Footer from '../shared/components/footer.js';
import Header from '../shared/components/header/index.js';
import { connect } from 'react-redux';
import cookie from 'cookie';
import redirect from '../shared/services/redirect';

function handleClick() {
  document.getElementById("requests_drop").classList.remove('circles_reqs__drop-visible')
  document.getElementById("circles_overlay").classList.add('hide')
  document.getElementById("requests_cta").classList.remove('clicked')
}

class Circles extends Component {
  static getInitialProps(context) {
    try {
      if (context.req) {
        const cookies = cookie.parse(context.req.headers.cookie || '');
        if (!cookies.token) {
          redirect(context, '/')
        }
        if (cookies.userServer) {
          return { user: cookies.userServer };
        }
      }
    } catch(e) {
      console.log(e);
    }
    return { user: undefined };
  }

  render() {
    return (
      <div className="mycircles col-fs-c">
        <Header />
        <div className="circles_overlay hide" id="circles_overlay"
          onClick={() => handleClick()}
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            zIndex: 99997,
          }}
        />
        <CirclesModule />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return process.browser ? 
    { user: state.user.user } :
    {};
}

export default connect(mapStateToProps)(Circles);