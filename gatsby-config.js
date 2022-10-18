module.exports = {
  siteMetadata: {
    siteUrl: `https://www.iconformingsystems.com`,
    // SEO
    title: "Icon Forming Systems Inc",
    titleTemplate: "%s · Concrete Forming Ontario",
    description:
      "ICON Forming Systems specializes in the design and supply of steel forming systems for concrete construction.",
    url: "https://www.iconformingsystems.com", // No trailing slash allowed!
    image: "/images/logo-full.svg", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    // filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/images/projects`,
      },
    },
    // sitemap
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: [`/privacy-policy/`],
      },
    },
    // google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-195875452-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
      },
    },
  ],
}
