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
  this.body = { data: [{
    id: game.id,
    codePegCount: game.codePegCount
  }] }
}

function* guess(id) {
  const game = store.lookup(id)

  if (rules.hasTurnsLeft(game)) {
    const guess = this.request.body.data.guess
    game.guesses = game.guesses.concat([guess])
    const keys = rules.calcKeys(guess, game.solution)
    const payload = { keys }

    if (!rules.hasTurnsLeft(game) || keys.blacks.length === game.codePegCount)
      payload.solution = game.solution

    debug('payload', payload)

    store.save(game)

    this.body = { data: [payload] }
  } else {
    this.status = 400
    this.body = { errors: [error.create('No more turns available')] }
  }
}

app.use(route.post('/', create))
app.use(route.post('/:id/guess', guess))
module.exports = app
