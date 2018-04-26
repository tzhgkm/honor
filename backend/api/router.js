'use strict'

const ApiV1 = require('./v1/_index')
const Page = require('./page/_index')

module.exports = (app) => {
  ApiV1(app)
  Page(app)
}
