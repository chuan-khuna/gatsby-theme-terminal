// resolve-url.js
const slugify = require('slugify')
module.exports = (title) => {
  console.log('resolve-url in theme-terminal')
  return `/posts/${slugify(title)}`
}
