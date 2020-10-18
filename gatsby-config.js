module.exports = {
  siteMetadata: {
    title: 'Webdesign',
    siteUrl: `https://uspekhi.web.app/`,
  },
  
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-sass`,
  

    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 800,
      },
    },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
   
   
   
    
  ],

}


