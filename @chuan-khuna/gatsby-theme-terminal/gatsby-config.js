const path = require('path')

module.exports = themeOptions => {
  const { source } = themeOptions

  let filesystemSources = []

  if (source) {
    const sourceFilesystemOption = name => {
      if (source) {
        return {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `${name}`,
            path: path.resolve(`src/${name}`),
          },
        }
      }
    }

    if (Array.isArray(source)) {
      for (let item of source) {
        filesystemSources.push(sourceFilesystemOption(item))
      }
    } else {
      filesystemSources.push(sourceFilesystemOption(source))
    }
  }

  return {
    siteMetadata: {
      name: ``,
      description: ``,
      keywords: [],
      siteUrl: ``,
      siteImage: ``,
      profileImage: ``,
      lang: ``,
      config: {
        sidebarWidth: 260,
      },
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [`inconsolata\:400,700`],
          display: 'swap',
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1080,
                linkImagesToOriginal: true,
              },
            },
            {
              resolve: `gatsby-remark-katex`,
            },
          ],
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          defaultLayouts: {
            default: require.resolve(`./src/layouts/PageLayout.js`),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1080,
                linkImagesToOriginal: true,
              },
            },
            {
              resolve: `gatsby-remark-katex`,
            },
          ],
          remarkPlugins: [require('remark-html-katex')],
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaultQuality: 75,
        },
      },

      // Theme pages (Dummy page)
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve(__dirname, `src/pages`),
        },
      },
      // Theme posts (Dummy post)
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: path.resolve(__dirname, `src/posts`),
        },
      },

      // Demo pages
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve(`src/pages`),
        },
      },
      // Demo 'src/whatever' the user has defined in options.source
      ...filesystemSources,
    ],
  }
}
