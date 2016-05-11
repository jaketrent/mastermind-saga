const koa = require('koa')
const route = require('koa-route')

const app = koa()

app.use(route.post('/', create))
app.use(route.get('/', list))
app.use(route.get('/:id', show))
app.use(route.del('/:id', del))

function* create() {
  this.body = [{ created: 'game' }]
}

function* list() {
  this.body = [{ all: 'games' }]
}

function* show(id) {
  this.body = { game: id }
}

function* del(id) {
  console.log('deleted.')
}

module.exports = app
