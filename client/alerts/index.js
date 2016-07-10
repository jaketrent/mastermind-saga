import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import * as alertsActions from '../alerts/actions'

function mapStateToProps(state) {
  return {
    alerts: state.alerts.alerts
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dismissAlert(errId) { dispatch(alertsActions.dismissAlert(errId)) }
  }
}

function renderAlert(props, err) {
  return (
    <li className={props.css.alert}
        key={err.id}
        onClick={_ => props.dismissAlert(err.id)}>
      {err.title}
    </li>
  )
}

function renderAlerts(props) {
  return props.alerts.map(err => renderAlert(props, err))
}

function Alerts(props) {
  return (
    <ul className={props.css.root}>
      {renderAlerts(props)}
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(styleable(css)(Alerts))
