module.exports = {
  siteMetadata: {
    title: 'Charge of the Chop Brigade',
    desc: 'A Blog About the Braves, And Other Things'
  },
  plugins: [
              {
                resolve: "gatsby-source-contentful",
                options: {
                  spaceId: 'mslkw1f4cgmd',
                  accessToken: 'db39f1b1b1f528c1aa3ce7302fd542e5ba59d01f4c9b3f18bbe46f3b199a0e1f'
                }
              },
              'gatsby-plugin-react-helmet',
              'gatsby-plugin-styled-components',
              {
                resolve: 'gatsby-source-filesystem',
                options: {
                  name: 'img',
                  path: `${__dirname}/src/images`
                }
              },
              {
                resolve: 'gatsby-source-filesystem',
                options: {
                  name: 'src',
                  path: `${__dirname}/src/`
                }
              },
              
              'gatsby-transformer-sharp',
              'gatsby-plugin-sharp',
              'gatsby-transformer-remark'
           ],
}
