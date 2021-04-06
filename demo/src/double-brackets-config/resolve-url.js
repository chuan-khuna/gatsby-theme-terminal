// resolve-url.js
const slugify = require('slugify')
module.exports = (title) => {
  return `/posts/${slugify(title)}`
}
