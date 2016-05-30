import { TYPES as HOLE_TYPES  } from '../hole/actions'
import { TYPES as GAME_TYPES  } from '../game/actions'

const initialState = {
  guess: [null, null, null, null],
  guesses: []
}

const colorOrder = ['red', 'yellow', 'blue', 'green']

function getNextColor(color) {
  if (!color) return colorOrder[0]

  const newIndex =  colorOrder.indexOf(color) + 1 % colorOrder.length
  return colorOrder[newIndex]
}

function placePeg(state, action) {
  const guess = [...state.guess]
  guess[action.index || 0] = getNextColor(state.guess[action.index])
  return {
    ...state,
    guess 
  }
}

function guess(state, action) {
  const guesses = state.guesses.concat([state.guess])
  return {
    ...state,
    guess: initialState.guess,
    guesses
  }
}

export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [HOLE_TYPES.PLACE_PEG]: placePeg,
    [GAME_TYPES.GUESS]: guess
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}
