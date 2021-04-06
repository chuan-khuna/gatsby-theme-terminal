// resolve-url.js
const slugify = require('slugify')
module.exports = (title) => {
  console.log('double-brackets from terminal theme')
  return `/posts/${slugify(title)}`
}
