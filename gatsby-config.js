module.exports = {
  siteMetadata: {
    title: 'The Barber Theme',
    description: 'Barber is a blog theme for Gatsby built by Thomas Vaeth for Samesies using HTML, Sass, and JavaScript.',
    url: 'http://barber.samesies.io',
    image: '/images/seo.jpg',
    twitterUsername: '@thomasvaeth',
    disqusShortname: 'test-apkdzgmqhj',
    socialMedia: [
      {
        name: 'twitter',
        url: 'https://twitter.com/thomasvaeth'
      },
      {
        name: 'instagram',
        url: 'https://www.instagram.com/thomas.vaeth/'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/thomasvaeth/'
      },
      {
        name: 'github',
        url: 'https://github.com/samesies'
      },
      {
        name: 'codepen',
        url: 'https://codepen.io/thomasvaeth/'
      }
    ]
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/templates/Default.js`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.5rem'
            },
          },
          'gatsby-remark-copy-linked-files'
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'the-barber-theme',
        short_name: 'barber',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico'
      }
    },
    'gatsby-plugin-offline'
  ]
};
