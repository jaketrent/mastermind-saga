import types from 'redux-types'

export const TYPES = types('game',
  'GUESS',
  'CREATE',
  'CREATE_SUCCESS',
  'CREATE_ERROR'
)

export function guess() {
  return { type: TYPES.GUESS }
}

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

