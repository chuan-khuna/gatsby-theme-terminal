const fs = require('fs')

fs.copyFile(
  './README.md',
  './@alicetaria/gatsby-theme-terminal/README.md',
  err => {
    if (err) {
      throw err
    }
    console.log('README copied to theme ok!')
  }
)
