import React from 'react'
import styleable from 'react-styleable'

import Board from './board'
import css from './game.css'

function Game(props) {
  return (
    <div className={props.css.root}>
      <Board />
    </div>
  )
}

Game.propTypes = {

}

export default styleable(css)(Game)
