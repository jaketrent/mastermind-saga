import types from 'redux-types'

export const TYPES = types('guess',
  'CREATE',
  'CREATE_SUCCESS',
  'CREATE_ERROR'
)

export function create(id, guess) {
  return {
    type: TYPES.CREATE,
    id,
    guess
  }
}

export function createSuccess(feedback) {
  return {
    type: TYPES.CREATE_SUCCESS,
    feedback
  }
}

export function createError(errors) {
  return {
    type: TYPES.CREATE_ERROR,
    errors
  }
}

