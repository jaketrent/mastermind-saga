import React from 'react'
import styleable from 'react-styleable'

import Hole from './hole'
import Peg from './peg'

import css from './row.css'

function Row(props) {
  return (
    <div className={props.css.root}>
      <Hole />
      <Hole />
      <Hole />
      <Hole />
    </div>
  )
}

Row.propTypes = {

}

export default styleable(css)(Row)
