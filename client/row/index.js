import React from 'react'
import styleable from 'react-styleable'

import * as arrayUtil from '../common/array'
import css from './index.css'
import Hole from '../hole'
import KeyHole from '../key-hole'

const { arrayOf, number, shape, string } = React.PropTypes

function renderKeyPegHoles(props) {
  return (
    <div className={props.css.keys}>
      {arrayUtil.range(props.keys.blacks).map(i => <KeyHole color="black" key={i} />)}
      {arrayUtil.range(props.keys.whites).map(i => <KeyHole color="white" key={i} />)}
    </div>
  )
}

function renderCodePegHoles(props) {
  return props.guess.map((color, i) => <Hole color={color} key={i} />)
}

class Row extends React.Component {
  render() {
    return (
      <div className={this.props.css.root}>
        {renderCodePegHoles(this.props)}
        {renderKeyPegHoles(this.props)}
      </div>
    )
  }
}

Row.propTypes = {
  keys: shape({
    whites: number,
    blacks: number
  }),
  guess: arrayOf(string)
}

export default styleable(css)(Row)
