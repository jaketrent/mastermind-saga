import types from 'redux-types'

export const TYPES = types('guess',
  'CREATE',
  'CREATE_SUCCESS',
  'CREATE_ERROR',
  'PLACE_PEG'
)

export function create(id, guess) {
  return {
    type: TYPES.CREATE,
    id,
    guess
  }
}

export function createSuccess(guess, feedback) {
  return {
    type: TYPES.CREATE_SUCCESS,
    guess,
    feedback
  }
}

export function createError(errors) {
  return {
    type: TYPES.CREATE_ERROR,
    errors
  }
}

export function placePeg(index) {
  return {
    type: TYPES.PLACE_PEG,
    index
  }
}
