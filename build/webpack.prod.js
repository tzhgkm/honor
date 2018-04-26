'use strict'

const webpack = require('webpack')

const base = require('./webpack.base')

base.output.filename = '[name].[chunkhash:8].js'

module.exports = base
