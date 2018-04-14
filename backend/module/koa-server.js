'use strict'

const fs = require('fs')
const https = require('https')

const Koa = require('koa')
const Promise = require('bluebird')

const Config = require('../config/_index')

const app = new Koa()

// app.use(function *(next) {
//   this.body = 'hello world'
//   // yield next
// })
//
// app.use(function *(next) {
//   console.log(this.url)
// })

app.use(async function(ctx) {
  ctx.body = 'hello lailin'
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
