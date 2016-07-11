import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import Board from '../board'
import Alerts from '../alerts'
import css from './index.css'

function mapStateToProps(state) {
  return {
    gameId: state.game.id
  }
}

function renderGame(props) {
  return (
    <div className={props.css.root}>
      <Alerts />
      <h1 className={props.css.title}>Mastermind</h1>
      <Board />
      <a className={props.css.cite} target="_blank" href="https://github.com/jaketrent/mastermind-saga">src on github</a>
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
