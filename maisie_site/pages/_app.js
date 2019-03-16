import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { StripeProvider } from 'react-stripe-elements-universal';
import { withApollo } from '../shared/services/with-apollo';
import { Provider } from 'react-redux';
import Head from 'next/head';
import '../sass/main.scss';
import initStore from '../shared/services/init-store';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
import FullStory, { FullStoryAPI } from 'react-fullstory';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }
    return {
      pageProps
    };
  }
  componentDidMount() {
    if (window.localStorage["persist:nextjs"]) {
      const a = JSON.parse(JSON.parse(window.localStorage["persist:nextjs"])["user"])
      if (a.user && a.user.id) {
        console.log(a.user);
        FullStoryAPI('identify', a.user.id, {
          displayName: a.user.firstName + " " + a.user.lastName,
          email: a.user.email,
          role: a.user.role
        })
      }
    }
  }

  render () {
    const {Component, pageProps, apolloClient, store} = this.props;
    return (
      <Container>
        <Head>
          <title>Maisie: Social Self Care</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Affordable mental health care" />
          <meta name="keywords" content="maisie, mental, health, community, counseling, group, groups, therapy, HTML, CSS, XML, JavaScript" />
          <meta name="author" content="Maisie, Inc." />
          <link rel="apple-touch-icon" sizes="152x152" href="https://s3.amazonaws.com/maisie-files/shared/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://s3.amazonaws.com/maisie-files/shared/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://s3.amazonaws.com/maisie-files/shared/favicon-16x16.png" />
          <link rel="manifest" href="https://s3.amazonaws.com/maisie-files/shared/site.webmanifest" />
          <link rel="mask-icon" href="https://s3.amazonaws.com/maisie-files/shared/safari-pinned-tab.svg" color="#7692ff" />
          <link rel="shortcut icon" href="https://s3.amazonaws.com/maisie-files/shared/favicon.ico" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="https://s3.amazonaws.com/maisie-files/shared/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <script src="https://js.stripe.com/v3/"></script>
        </Head>
        <FullStory org="JYKYB" />
        <StripeProvider apiKey={publicRuntimeConfig.stripePublicKey}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={store.__persistor}>
              <ApolloProvider client={apolloClient}>
                <Component {...pageProps} />
              </ApolloProvider>
            </PersistGate>
          </Provider>
        </StripeProvider>
      </Container>
    )
  }
}

export default withApollo(withRedux(initStore, {debug: true})(MyApp));
