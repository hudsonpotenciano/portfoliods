
const nextConfig = require("next-transpile-modules")(["@portfoliods/react"]);

module.exports = nextConfig({
  reactStrictMode: true,
  swcMinify: true,
})
