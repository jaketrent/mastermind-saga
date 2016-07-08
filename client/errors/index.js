import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import * as gameActions from '../game/actions'

function mapStateToProps(state) {
  return {
    errors: state.game.errors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dismissError(errId) { dispatch(gameActions.dismissError(errId)) }
  }
}

function renderError(props, err) {
  return (
    <li className={props.css.error}
        key={err.id}
        onClick={_ => props.dismissError(err.id)}>
      {err.title}
    </li>
  )
}

function renderErrors(props) {
  return props.errors.map(err => renderError(props, err))
}

function Errors(props) {
  return (
    <ul className={props.css.root}>
      {renderErrors(props)}
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(styleable(css)(Errors))
