'use strict'

const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpackHotMiddleware = require('koa-webpack-hot-middleware')

const pkg = require('../package.json')
const devConfig = require('./webpack.dev')
const frontendPath = path.join(__dirname, '../dist', pkg.name, 'frontend')

const sendFile = (ctx, file) => {
  ctx.type = 'text/html'
  ctx.body = ctx.webpack.fileSystem.readFileSync(frontendPath + '/' + file)
}
const compiler = webpack(devConfig)

module.exports = (app, router) => {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300
    },
    stats: {
      colors: true
    }
  }))

  app.use(webpackHotMiddleware(compiler))

  router.get('/', async function (ctx) {
    sendFile(ctx, 'main.html')
  })
}
