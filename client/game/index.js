import React from 'react'
import styleable from 'react-styleable'

import Board from '../board'
import css from './index.css'
import Guesser from '../guesser'

function Game(props) {
  return (
    <div className={props.css.root}>
      <Board />
      <Guesser />
    </div>
  )
}

Game.propTypes = {

}

export default styleable(css)(Game)
