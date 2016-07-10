import { TYPES } from './actions'

export const initialState = {
  alerts: [],
}

function appendAlerts(state, action) {
  return {
    ...state,
    alerts: state.alerts.concat(action.alerts)
  }
}

function dismissAlert(state, action) {
  let alerts = state.alerts.slice(0)
  alerts.splice(alerts.findIndex(e => e.id === action.id), 1)

  return {
    ...state,
    alerts 
  }
}

export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [TYPES.APPEND_ALERTS]: appendAlerts,
    [TYPES.DISMISS_ALERT]: dismissAlert
  }
  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}
