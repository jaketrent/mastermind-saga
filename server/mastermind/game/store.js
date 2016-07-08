const games = {}

function lookup(id) {
  return Object.assign({}, games[id])
}

function save(game) {
  games[game.id] = game
  return game
}

exports.lookup = lookup
exports.save = save
