import React from 'react'
import styleable from 'react-styleable'

import * as actions from './hole/actions'
import css from './hole.css'

function handleClick() {
  actions.placePeg()
}

class Hole extends React.Component {
  render() {
    return (
      <div className={props.css.root} onClick={handleClick}>
        {props.children}
      </div>
    )
  }
}

Hole.propTypes = {

}

export default styleable(css)(Hole)
