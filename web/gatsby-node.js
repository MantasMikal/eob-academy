async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const absolutePath = await graphql(`
    {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        siteUrl
      }
    }
  `)
   ('absolutePath', absolutePath)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/blog/${slug.current}/`
    const absPath = `${absolutePath.data.site.siteUrl}${path}`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.js'),
      context: { id, absPath },
    })
  })
}

async function createTeamPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityTeam(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const absolutePath = await graphql(`
    {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        siteUrl
      }
    }
  `)


  if (result.errors) throw result.errors

  const teamEdges = (result.data.allSanityTeam || {}).edges || []

  teamEdges.forEach((edge, index) => {
    const { id, slug = {} } = edge.node
    const path = `/team/${slug.current}/`
    const absPath = `${absolutePath.data.site.siteUrl}${path}`

    reporter.info(`Creating team page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/team.js'),
      context: { id, absPath },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  await createTeamPages(graphql, actions, reporter)
}

// Removes Mini-css errors
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}
