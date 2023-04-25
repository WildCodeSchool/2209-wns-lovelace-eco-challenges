/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
  images: {
    domains: [
      'images.caradisiac.com',
      'www.wedemain.fr',
      'fr.jardins-animes.com',
      'www.wedemain.fr',
      'picsum.photos',
      'assets.letemps.ch'
    ],
  },
}

module.exports = nextConfig
