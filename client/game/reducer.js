import { TYPES as HOLE_TYPES  } from '../hole/actions'
import { TYPES as GAME_TYPES  } from '../game/actions'
import { TYPES as GUESS_TYPES  } from '../guesser/actions'

export const initialState = {
  errors: [],
  feedbacks: [],
  guess: [null, null, null, null],
  guesses: [],
  id: null
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

function gameCreateSuccess(state, action) {
  return {
    ...state,
    id: action.game.id
  }
}

function guessCreateSuccess(state, action) {
  const guesses = state.guesses.concat([state.guess])
  return {
    ...state,
    guess: state.guess,
    guesses,
    feedbacks: state.feedbacks.concat([action.feedback])
  }
}


export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [HOLE_TYPES.PLACE_PEG]: placePeg,
    [GAME_TYPES.CREATE_SUCCESS]: gameCreateSuccess,
    [GUESS_TYPES.CREATE_SUCCESS]: guessCreateSuccess
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}
