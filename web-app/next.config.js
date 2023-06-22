/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  i18n,
  reactStrictMode: true,
  serverRuntimeConfig: {
    apiUrl: "http://back-end:4000/api"
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "production" 
        ? "http://localhost:8000/api"
        : "http://localhost:4000"
  },
  async rewrites() {
    return [
      {
        source: '/uploader/:path*',
        destination: 'http://uploader:5000/uploader/:path*',
      },
    ]
  },
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
