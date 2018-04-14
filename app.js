'use strict'

const Module = require('./backend/module/_index')

function initMgClient() {
  return (Module.mgClient = require('./backend/module/mg-client')()).promise
}

function initKoaServer() {
  return require('./backend/module/koa-server')()
}

initMgClient()
  .then(initKoaServer)
  .then(() => console.log('OK: app start'))
  .catch(err => console.log('ERR: app start:\n' + err))

process.on('uncaughtException', err => {
  console.log('App uncaught exception:\n' + err)

  process.nextTick(() => process.exit(1))
})
