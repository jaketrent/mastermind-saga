import React from 'react'
import styleable from 'react-styleable'

import css from './hole.css'

function Hole(props) {
  return (
    <div className={props.css.root}>
      {props.children}
    </div>
  )
}

Hole.propTypes = {

}

export default styleable(css)(Hole)
