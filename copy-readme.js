const fs = require('fs')

fs.copyFile(
  './README.md',
  './@chuan-khuna/gatsby-theme-terminal/README.md',
  err => {
    if (err) {
      throw err
    }
    console.log('README copied to theme ok!')
  }
)
