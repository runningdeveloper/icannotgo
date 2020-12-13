module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "1234",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-manifest",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
