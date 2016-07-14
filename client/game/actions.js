import types from 'redux-types'

import * as api from './api'

export const TYPES = types('game',
  'CREATE_SUCCESS',
  'CREATE_ERROR',
  'DISMISS_ERROR'
)

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

export function create() {
  return async dispatch => {
    const { deserializeError, deserializeSuccess, formatUrl, request, serialize } = api.create
    try {
      const res = await request(formatUrl())
      dispatch(createSuccess(deserializeSuccess(res)))
    } catch (res) {
      if (res instanceof Error) throw res

      dispatch(createError(deserializeError(res)))
    }
  }
}
