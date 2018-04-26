'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('../package.json')
const path = require('path')

module.exports = {
  mode: 'production',

  context: path.resolve(__dirname, '../frontend'),

  entry: {
    main: './entry.js',
    vendor: ['vue']
  },

  output: {
    path: path.join(__dirname, '../dist/' + pkg.name + '/frontend'),
    filename: '[name].js'
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'eslint-loader',
          options: {
            configFile: 'frontend/.eslintrc.js'
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './tpl.html',
      filename: 'main.html'
    })
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common'
    }
  }
}
