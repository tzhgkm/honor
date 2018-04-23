'use strict'

const fs = require('fs')
const path = require('path')
const https = require('https')

const Koa = require('koa')
const koaStatic = require('koa-static')
const favicon = require('koa-favicon')
const Promise = require('bluebird')

const Config = require('../config/_index')

const app = new Koa()

app.use(favicon(path.join(Config.base.frontendPath, 'assets/favicon.png'), {
  maxAge: 1000 * 60 * 60 * 24 * 30
}))
app.use(koaStatic(path.join(__dirname, '../../frontend'), { maxage: 0, index: false }))


app.use(async (ctx, next) => {

  console.log(ctx.url)
  if (/^\/node_modules\/vue/.test(ctx.url)) {
    ctx.type = 'text/plain'
    ctx.body = await fs.readFileSync(path.join(__dirname, '../..' + ctx.url))
    // ctx.redirect('../..' + ctx.url)
    return
  }
  await next()
})

// app.use(function *(next) {
//   this.body = 'hello world'
//   // yield next
// })
//
// app.use(function *(next) {
//   console.log(this.url)
// })

app.use(async function(ctx) {
  ctx.type = 'text/html'
  ctx.body = await fs.readFileSync(`${Config.base.frontendPath}/index.html`)
  // ctx.body = await 'lailin'
})

module.exports = () => {
  const options = {
    key: fs.readFileSync(`${Config.base.backendPath}/ssl/honor-key.pem`),
    cert: fs.readFileSync(`${Config.base.backendPath}/ssl/honor-cert.pem`)
  }

  return new Promise(resolve => {
    https.createServer(options, app.callback()).listen(2600, () => {
      console.log(`Koa https server listening on port 2600`)
      resolve()
    })
  })
}
