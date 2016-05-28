import React from 'react'
import styleable from 'react-styleable'

import Row from './row'

import css from './board.css'

function Board(props) {
  return (
    <div className={props.css.root}>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  )
}

Board.propTypes = {

}

export default styleable(css)(Board)
