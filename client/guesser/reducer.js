import { TYPES } from './actions'

export const initialState = {
  guess: [null, null, null, null]
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

function createSuccess(state, action) {
  return {
    ...state,
    guess: state.guess
  }
}


export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [TYPES.PLACE_PEG]: placePeg,
    [TYPES.CREATE_SUCCESS]: createSuccess
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}
