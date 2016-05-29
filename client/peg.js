import React from 'react'
import styleable from 'react-styleable'

import css from './peg.css'

const { string } = React.PropTypes

function Peg(props) {
  return (
    <div className={props.css[props.color]}></div>
  )
}

Peg.propTypes = {
  color: string
}

Peg.defaultProps = {
  color: 'gray'
}

export default styleable(css)(Peg)
