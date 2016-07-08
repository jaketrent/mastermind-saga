import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import Board from '../board'
import Errors from '../errors'
import css from './index.css'
import Guesser from '../guesser'

function mapStateToProps(state) {
  return {
    gameId: state.game.id
  }
}

function renderGame(props) {
  return (
    <div className={props.css.root}>
      <Errors />
      <Board />
      <Guesser />
    </div>
  )
}

function renderLoading(props) {
  return (
    <div>Loading</div>
  )
}

function Game(props) {
  return props.gameId
    ? renderGame(props)
    : renderLoading(props)
}

Game.propTypes = {

}

export default connect(mapStateToProps)(styleable(css)(Game))
