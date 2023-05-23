const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  fallbacking: {
    default: ['fr']
  },
  ns: ["page", "home", "challenges", "challenge", "formlaunchchallenge", "signin", "signup"],
}

module.exports = nextI18NextConfig
