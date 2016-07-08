const debug = require('debug')('mm')
const koa = require('koa')
const route = require('koa-route')

const rules = require('./rules')
const store = require('./store')

const app = koa()

function* create() {
  const game = rules.generateGame()
  debug('game', game)
  store.save(game)
  this.body = { data: [{ id: game.id }] }
}

function* guess(id) {
  const keys = rules.calcKeyPegs(this.request.body.data.guess, store.lookup(id).solution)
  debug('keys', keys)
  this.body = { data: [{ keys }] }
}

app.use(route.post('/', create))
app.use(route.post('/:id/guess', guess))
module.exports = app
