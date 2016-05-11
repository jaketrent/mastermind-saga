import React from 'react'
import styleable from 'react-styleable'

import css from './game.css'

function Game(props) {
  return (
    <div className={props.css.root}>Game</div>
  )
}

Game.propTypes = {

}

export default styleable(css)(Game)
