import { TYPES } from '../game/actions'
import { TYPES as GUESS_TYPES  } from '../guess/actions'

export const initialState = {
  feedbacks: [],
  guesses: [],
  id: null
}

function createSuccess(state, action) {
  return {
    ...state,
    id: action.game.id
  }
}

function guessCreateSuccess(state, action) {
  const guesses = state.guesses.concat([action.guess])
  return {
    ...state,
    guesses,
    feedbacks: state.feedbacks.concat([action.feedback])
  }
}


export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [TYPES.CREATE_SUCCESS]: createSuccess,
    [GUESS_TYPES.CREATE_SUCCESS]: guessCreateSuccess
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}
