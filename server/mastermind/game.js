const koa = require('koa')
const route = require('koa-route')
const uuid = require('node-uuid')

const app = koa()

app.use(route.post('/', create))
app.use(route.get('/', list))
app.use(route.get('/:id', show))
app.use(route.del('/:id', del))

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

function* create() {
  const id = uuid.v4()
  games[id] = generateGame(id)
  console.log('games', games)
  this.body = { data: [{ id }] }
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
