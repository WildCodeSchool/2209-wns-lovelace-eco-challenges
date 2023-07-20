const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
  fallbacking: {
    default: ['fr']
  },
  ns: ["page", "home", "challenges", "challenge", "signin", "signup", "profile", "forget-password", "change-password", "formlaunchchallenge"],
}

module.exports = nextI18NextConfig
