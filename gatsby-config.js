module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: "Changemakers",
        name: "Vancouver Changemakers",
        start_url: `/`,
        icon: `src/assets/app_logo_1000.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        background_color: `#13c6a2`,
        theme_color: `#13c6a2`,
        display: `standalone`,
      },
    },
  ]
}