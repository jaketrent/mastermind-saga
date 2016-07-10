import types from 'redux-types'

export const TYPES = types('alerts',
  'APPEND_ALERTS',
  'DISMISS_ALERT'
)

export function alert(alerts) {
  return {
    type: TYPES.APPEND_ALERTS,
    alerts
  }
}

export function dismissAlert(id) {
  return {
    type: TYPES.DISMISS_ALERT,
    id
  }
}
