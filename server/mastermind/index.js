const koa = require('koa')
const mount = require('koa-mount')

const game = require('./game')

const app = koa()

app.use(mount('/', game))

module.exports = app
