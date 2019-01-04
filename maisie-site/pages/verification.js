import React from "react";
import Head from 'next/head'
import './verification.scss'
import Loader from 'react-loader';
import axios from 'axios';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class Verified extends React.Component {
  static getInitialProps({query}) {
    const token = query.token;
    return {token};
  }

  state = {
    loading: true,
    tokenVerified: false
  }

  async componentDidMount() {
    try {
      const res = await axios.patch(`/api/users/verify/`, {
        token: this.props.token
      }, {
        headers: {
          Authorization: `Bearer ${this.props.token}`
        }
      });
      this.setState({ tokenVerified: true, loading: false });
    } catch (e) {
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.tokenVerified) {
      return (
        <div>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
          </Head>
          <div style={{height: '100vh !important', overflow: 'hidden !important'}}>
            <div className="verified-container flex-centered-column font-base-regular">
              <img src="../static/verification/checked-logo.svg" />
              <h1>Success!</h1>
              <span>Thanks for verifying your email. We're excited to have you here and we'll reach out soon with more information.</span>
              <div className="button-container">
                <a href="https://www.heymaisie.com"><div className="verified-button flex-centered-column">Back to home page</div></a>
              </div>
            </div>
            <span className="verified-footer-text text-base-regular">© Maisie</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Something Went Wrong! Please reach out to support@heymaisie.com if you believe there's an error.</h1>
        </div>
      );
    }
  }
}
export default Verified;