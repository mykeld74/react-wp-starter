module.exports = {
  siteMetadata: {
    title: `Web Title`,
    description: `Brief Description`,
    author: `Mike Daugherty`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Westwoods`,
        short_name: `wcc`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/ww-favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `your WP File Here`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM+Plex+Sans\:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i`,
          `Caveat\:400,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "***Get Tracking Code***",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "",
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
