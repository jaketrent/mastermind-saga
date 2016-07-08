const debug = require('debug')('mm')
const koa = require('koa')
const route = require('koa-route')
const uuid = require('node-uuid')

const app = koa()

app.use(route.post('/', create))
app.use(route.post('/:id/guess', guess))

const games = {}
const colorOrder = ['red', 'yellow', 'blue', 'green']

function randomInt(max = colorOrder.length) {
  return Math.floor((Math.random() * max))
}

function generateSolution() {
  return [1, 2, 3, 4].map(_ => colorOrder[randomInt()])
}

function generateGame(id) {
  return {
    id,
    guesses: [],
    solution: generateSolution()
  }
}

function lookup(id) {
  return Object.assign({}, games[id])
}

function calcKeyPegs(guess, solution) {
  const blackIndexes = guess.reduce((indexes, g, i) => {
    const isBlack = g === solution[i]
    return indexes = isBlack
      ? indexes.concat([i])
      : indexes
  }, [])

  const whiteIndexes = guess.reduce((indexes, g, i) => {
    const indexInSolution = solution.indexOf(g)
    const isWhite = indexInSolution > -1
      && !blackIndexes.includes(indexInSolution)
      && !indexes.includes(indexInSolution)
    return indexes = isWhite
      ? indexes.concat([i])
      : indexes
  }, [])

  return {
    blacks: blackIndexes.length,
    whites: whiteIndexes.length
  }
}

function* create() {
  const id = uuid.v4()
  const game = generateGame(id)
  debug('game', game)
  games[id] = game 
  this.body = { data: [{ id }] }
}

function* guess(id) {
  const keys = calcKeyPegs(this.request.body.data.guess, lookup(id).solution)
  debug('keys', keys)
  this.body = { data: [{ keys }] }
}

module.exports = app
