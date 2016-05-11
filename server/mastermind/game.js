const koa = require('koa')
const route = require('koa-route')

const app = koa()

app.use(route.post('/', create))
app.use(route.get('/', list))

function* create() {
  this.body = [{ created: 'game' }]
}
function* list() {
  this.body = [{ all: 'games' }]
}

module.exports = app
