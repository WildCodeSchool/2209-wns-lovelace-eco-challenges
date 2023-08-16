/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  serverRuntimeConfig: {
    apiUrl: "http://back-end:4000/graphql"
  },
  publicRuntimeConfig: {
    apiUrl:"/graphql"
  },
  async rewrites() {
    return [
      {
        source: '/uploader/:path*',
        destination: 'http://uploader:5000/uploader/:path*',
      },
      {
        source: "/graphql/:path*",
        destination: "http://back-end:4000/graphql/:path*",
      },
    ]
  },
  images: {
    domains: [
      'www.google.com',
      'images.caradisiac.com',
      'www.wedemain.fr',
      'fr.jardins-animes.com',
      'www.wedemain.fr',
      'picsum.photos',
      'assets.letemps.ch',
      'img.freepik.com',
      'cdn.pixabay.com'
    ],
  },
}

module.exports = nextConfig
