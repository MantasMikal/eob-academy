require('dotenv').config()
const path = require('path')
const config = require('./config')
const {
  api: { projectId, dataset }
} = requireConfig('../studio/sanity.json')

module.exports = {
  siteMetadata: {
    title: config.site.siteTitle,
    siteUrl: config.site.siteUrl,
    description: config.site.description
  },
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          Primitive: 'src/components/Primitive',
          Common: 'src/components/Common',
          Context: 'src/components/Context',
          lib: 'src/lib',
          Section: 'src/components/Section'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: [
            ...require('backline-mixins').includePaths,
            ...require('backline-normalize').includePaths,
            path.join(__dirname, 'src/asset/scss/setting')
          ],
          sassRuleModulesTest: /\.module\.s(a|c)ss$/
        }
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /asset/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: 'b1b7951c-3249-476c-b56f-bf42e4cfeb51',
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: true // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/asset/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.site.siteTitle,
        short_name: config.site.shortName,
        background_color: config.site.bgColor,
        theme_color: config.site.themeColor,
        start_url: '/',
        display: 'standalone',
        icon: 'src/asset/favicon.png'
      }
    },
    {
      resolve: 'gatsby-transform-portable-text',
      options: {
        extendTypes: [{ typeName: 'SanityPost', contentFieldName: 'body' }]
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-offline'
  ]
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireConfig (path) {
  try {
    return require('../studio/sanity.json')
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || ''
      }
    }
  }
}
