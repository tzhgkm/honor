'use strict'

const Router = require('koa-router')

module.exports = (app) => {
  const r1 = new Router()

  app.use(r1.routes()).use(r1.allowedMethods())
}
