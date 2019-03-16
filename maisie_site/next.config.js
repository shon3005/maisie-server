const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
module.exports = withFonts(withSass({
  publicRuntimeConfig: { // Will be available on both server and client
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY, // Pass through env variables
    fullStoryOrg: process.env.FULLSTORY_ORG
  }
}))