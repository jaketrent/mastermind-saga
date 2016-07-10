import * as arrayUtil from '../common/array'
import { TYPES as GAME_TYPES } from '../game/actions'
import { TYPES } from './actions'

export const initialState = {
  guess: []
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

function gameCreateSuccess(state, action) {
  return {
    ...state,
    guess: arrayUtil.range(action.game.codePegCount).map(i => null),
    codePegCount: action.game.codePegCount
  }
}

export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [GAME_TYPES.CREATE_SUCCESS]: gameCreateSuccess,
    [TYPES.PLACE_PEG]: placePeg,
    [TYPES.CREATE_SUCCESS]: createSuccess
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}
