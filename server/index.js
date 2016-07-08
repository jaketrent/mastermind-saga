const bodyParser = require('koa-bodyparser')
const debug = require('debug')('mm')
const fs = require('fs')
const logger = require('koa-logger')
const koa = require('koa')
const mount = require('koa-mount')
const route = require('koa-route')

const mastermind = require('./mastermind')
const static = require('./static')

const app = koa()
const port = process.env.PORT || 3000

app.use(logger())
app.use(mount('/static', static))
app.use(bodyParser())
app.use(mount('/api/mastermind', mastermind))
app.use(route.get('/', index))

function* index() {
  this.body = fs.readFileSync('./client/index.html', 'utf8')
}

app.listen(port)
debug(`Listening on port ${port}...`)
