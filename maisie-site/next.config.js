// next.config.js
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : require('next-server/constants');

const config = {
  publicRuntimeConfig: {
    api: process.env.API
  }
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return config;
  }

  // ✅ Put the require call here.
  const withSass = require('@zeit/next-sass')
  const withFonts = require('next-fonts')

  return withFonts(withSass(config))
};