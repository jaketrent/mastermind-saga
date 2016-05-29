import { TYPES as HOLE_TYPES  } from '../hole/actions'

const initialState = {
  guess: [null, null, null, null]
}

const colorOrder = ['red', 'yellow', 'blue', 'green']

function getNextColor(color) {
  if (!color) return colorOrder[0]

  const newIndex =  colorOrder.indexOf(color) + 1 % colorOrder.length
  console.log('newIndex', newIndex)
  return colorOrder[newIndex]
}

function placePeg(state, action) {
  console.log('actionn', action)
  const guess = [...state.guess]
  guess[action.index || 0] = getNextColor(state.guess[action.index])
  console.log('guess', guess)
  return {
    ...state,
    guess 
  }
}
export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [HOLE_TYPES.PLACE_PEG]: placePeg
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}
