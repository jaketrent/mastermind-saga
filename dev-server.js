const fs = require('fs')
const koa = require('koa')
const logger = require('koa-logger')
const mount = require('koa-mount')
const route = require('koa-route')
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpack = require('webpack')

const config = require('./webpack.config.babel')

const app = koa()
const port = process.env.PORT || 3000

app.use(logger())
app.use(mount('/static', webpackDevMiddleware(webpack(config))))

app.listen(port)
console.log(`Webpacking on ${port}...`)
