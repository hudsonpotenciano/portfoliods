
const nextConfig = require("next-transpile-modules")(["@portfoliods/react"]);

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
  disable: true
});

module.exports = withPWA(nextConfig({
  reactStrictMode: false,
  swcMinify: true,
  env: {
    REACT_APP_CONTENTFUL_SPACE: "iciuyzpdgf5z",
    REACT_APP_CONTENTFUL_ACCESS_TOKEN: "txpm1McELP1CSP8yQvwLNhxfz4fYSnztxhmfCkAI7uU",
    REACT_APP_CONTENTFUL_ENVIRONMENT: "master",
    REACT_APP_PEXELS_WALLPAPERS: "563492ad6f91700001000001baf35203032241c2990d7c5410b9699b",
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: false
  }
}))
