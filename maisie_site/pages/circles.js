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
  static getInitialProps({ctx}) {
    if (ctx.req) {
      const cookies = cookie.parse(ctx.req.headers.cookie || '');
      if (!cookies.token) {
        redirect(ctx, '/')
      }
      return { route: ctx.req.path }
    } else {
      return { route: Router.route }
    }
  }
  render() {
    return (
      <div className="mycircles col-fs-c">
        <Header loggedIn="loggedIn"/>
        <div className="circles_overlay hide" id="circles_overlay"
          onClick={() => handleClick()}
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            zIndex: 99997,
          }}
        />
        <CirclesModule token={this.props.token} blank={this.props.user.circles ? false : true} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    token: state.user.token
  }
}

export default connect(mapStateToProps)(Circles);
