const uuid = require('node-uuid')

const mathUtils = require('../../common/utils/math')

const colorOrder = ['red', 'yellow', 'blue', 'green']
const numTurns = 2

function generateSolution() {
  return [1, 2, 3, 4].map(_ => colorOrder[mathUtils.randomInt(colorOrder.length)])
}

function generateGame(id) {
  return {
    id: uuid.v4() || id,
    guesses: [],
    solution: generateSolution()
  }
}

function calcKeys(guess, solution) {
  const blackIndexes = guess.reduce((indexes, g, i) => {
    const isBlack = g === solution[i]
    return indexes = isBlack
      ? indexes.concat([i])
      : indexes
  }, [])

  const whiteIndexes = guess.reduce((indexes, g, i) => {
    const uniqueNewMatches = solution
      .map((color, i) => color === g ? i : -1)
      .filter(i => i > -1)
      .filter(i => !blackIndexes.includes(i))
      .filter(i => !indexes.includes(i))

    return indexes = uniqueNewMatches.length > 0
      ? indexes.concat(uniqueNewMatches)
      : indexes
  }, [])

  return {
    blacks: blackIndexes.length,
    whites: whiteIndexes.length
  }
}

function hasTurnsLeft(game) {
  return game.guesses.length < numTurns
}

exports.generateGame = generateGame
exports.calcKeys = calcKeys
exports.hasTurnsLeft = hasTurnsLeft
