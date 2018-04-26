'use strict'

const webpack = require('webpack')
const base = require('./webpack.base')

base.mode = 'development'

base.entry.vendor.push('webpack-hot-middleware/client')

base.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = base
