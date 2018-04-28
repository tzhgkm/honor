'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require('../package.json')
const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const extractCss = new ExtractTextPlugin('vendor.[contenthash:8].css')

module.exports = {
  mode: 'production',

  context: path.resolve(__dirname, '../frontend'),

  entry: {
    main: './entry.js',
    vendor: ['vue']
  },

  output: {
    path: path.join(__dirname, '../dist/' + pkg.name + '/frontend'),
    publicPath: '/',
    filename: '[name].js'
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },

  devServer: {
    hot: true
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
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
      // {
      //   test: /\.js$/,
      //   exclude: [/node_modules/],
      //   use: 'babel-loader'
      // },
      // {
      //   test: /\.styl/,
      //   use: extractCss.extract(['css-loader', 'stylus-loader'])
      // },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './tpl.html',
      filename: 'main.html'
    }),
    new VueLoaderPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common'
    }
  }
}
