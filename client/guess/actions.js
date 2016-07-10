import types from 'redux-types'

import * as alertsUtils from '../alerts/utils'

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
    feedback,
    alerts: feedback.solution ? [alertsUtils.create('Game over')]: []
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
