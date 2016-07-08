const uuid = require('node-uuid')

const mathUtils = require('../../common/utils/math')

const colorOrder = ['red', 'yellow', 'blue', 'green']

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

exports.generateGame = generateGame
exports.calcKeyPegs = calcKeyPegs
