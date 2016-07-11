const uuid = require('node-uuid')

const mathUtils = require('../../common/utils/math')

const colorOrder = ['red', 'yellow', 'blue', 'green']
const turnCount = 8
const CODE_PEG_COUNT = 4

function generateSolution() {
  return [1, 2, 3, 4].map(_ => colorOrder[mathUtils.randomInt(colorOrder.length)])
}

function generateGame(id) {
  return {
    codePegCount: CODE_PEG_COUNT,
    id: uuid.v4() || id,
    guesses: [],
    solution: generateSolution()
  }
}

function findWhiteIndexes(src, compare, blackIndexes) {
  return src.reduce((indexes, g, i) => {
    const oneUniqueNewMatch = compare
      .map((color, i) => color === g ? i : -1)
      .filter(i => i > -1)
      .filter(i => !blackIndexes.includes(i))
      .filter(i => !indexes.includes(i))
      .splice(0, 1)

    return indexes = oneUniqueNewMatch.length > 0
      ? indexes.concat(oneUniqueNewMatch)
      : indexes
  }, [])
}

function calcKeys(guess, solution) {
  const blackIndexes = guess.reduce((indexes, g, i) => {
    const isBlack = g === solution[i]
    return indexes = isBlack
      ? indexes.concat([i])
      : indexes
  }, [])

  const whiteIndexesInSolution = findWhiteIndexes(solution, guess, blackIndexes)
  const whiteIndexesInGuess = findWhiteIndexes(guess, solution, blackIndexes)
  const whiteIndexesSingleUseCount = Math.min(whiteIndexesInSolution.length, whiteIndexesInGuess.length)

  return {
    blacks: blackIndexes.length,
    whites: whiteIndexesSingleUseCount
  }
}

function hasTurnsLeft(game) {
  return game.guesses.length < turnCount
}

exports.calcKeys = calcKeys
exports.generateGame = generateGame
exports.hasTurnsLeft = hasTurnsLeft
