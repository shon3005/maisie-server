import Landing from '../modules/landing/index.js';
import Head from 'next/head'
import '../sass/main.scss';

export default () =>
  <div>
    <Head>
      <title>Maisie: Community-based counseling</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Affordable mental health care" />
      <meta name="keywords" content="maisie, mental, health, community, counseling, group, groups, therapy, HTML, CSS, XML, JavaScript" />
      <meta name="author" content="Maisie, Inc." />
      <link rel="apple-touch-icon" sizes="152x152" href="/static/shared/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/shared/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/shared/favicon-16x16.png" />
      <link rel="manifest" href="/static/shared/site.webmanifest" />
      <link rel="mask-icon" href="/static/shared/safari-pinned-tab.svg" color="#7692ff" />
      <link rel="shortcut icon" href="/static/shared/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/static/shared/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Landing />
  </div>
