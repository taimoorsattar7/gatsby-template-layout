const tailwindConfig = require("./tailwind.config.js")

module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
        ],
      },
    },
  ],
}
