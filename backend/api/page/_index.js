'use strict'

const Router = require('koa-router')

const Config = require('../../config/_index')
const Util = require('../../util/_index')

const fs = Util.core.fs

module.exports = (app) => {
  const r1 = new Router()

  if (Config.base.isDevelopment) {
    require('../../../build/dev-server')(app, r1)
  } else {
    const pageCache = fs.readFileSync(`${Config.base.frontendPath}/main.html`, 'utf8')
    r1.get('/', async function(ctx) {
      ctx.type = 'text/html'
      ctx.body = pageCache
    })
  }

  app.use(r1.routes()).use(r1.allowedMethods())
}
