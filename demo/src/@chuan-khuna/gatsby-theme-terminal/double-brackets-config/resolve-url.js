// resolve-url.js
const slugify = require("slugify")
module.exports = (title) => {
  console.log("Shadowing version of resolve-url.js")
  return `/postssss/${slugify(title)}`
}
