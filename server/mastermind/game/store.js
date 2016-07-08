const debug = require('debug')('mm')

const games = {}

function lookup(id) {
  return Object.assign({}, games[id])
}

function save(game) {
  games[game.id] = game
  debug('store', games)
  return game
}

exports.lookup = lookup
exports.save = save
