import types from 'redux-types'

import * as alertsUtils from '../alerts/utils'
import * as arrayUtils from '../common/array'

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
    alerts: feedback.solution 
      ? [feedback.solution && alertsUtils.create(
          arrayUtils.shallowEqual(guess, feedback.solution)
            ? 'You won!'
            : 'Game over :('
        )]
      : []
  }
}

export function createError(errors) {
  return {
    type: TYPES.CREATE_ERROR,
    alerts: errors
  }
}

export function placePeg(index) {
  return {
    type: TYPES.PLACE_PEG,
    index
  }
}
