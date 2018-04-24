'use strict'

const path = require('path')

module.exports = {
  entry: '../frontend/entry.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  }
}
