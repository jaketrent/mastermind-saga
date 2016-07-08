import types from 'redux-types'

export const TYPES = types('game',
  'CREATE',
  'CREATE_SUCCESS',
  'CREATE_ERROR',
  'DISMISS_ERROR'
)

export function create() {
  return {
    type: TYPES.CREATE
  }
}

export function createSuccess(game) {
  return {
    type: TYPES.CREATE_SUCCESS,
    game
  }
}

export function createError(errors) {
  return {
    type: TYPES.CREATE_ERROR,
    errors
  }
}

export function dismissError(id) {
  return {
    type: TYPES.DISMISS_ERROR,
    id
  }
}
