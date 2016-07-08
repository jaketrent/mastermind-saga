const debug = require('debug')('mm')
const koa = require('koa')
const route = require('koa-route')

const error = require('../../common/error')
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
  const game = store.lookup(id)

  if (rules.hasTurnsLeft(game)) {
    const guess = this.request.body.data.guess
    const keys = rules.calcKeyPegs(guess, game.solution)
    debug('keys', keys)

    game.guesses = game.guesses.concat([guess])
    store.save(game)

    this.body = { data: [{ keys }] }
  } else {
    this.status = 400
    this.body = { errors: [error.create('No more turns available')] }
  }
}

app.use(route.post('/', create))
app.use(route.post('/:id/guess', guess))
module.exports = app
