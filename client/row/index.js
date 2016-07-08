import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import { initialState as gameInitialState } from '../game/reducer'
import Hole from '../hole'
import KeyHole from '../key-hole'

const { arrayOf, number, shape, string } = React.PropTypes

function range(to) {
  let arr = []
  for (let i = 0; i < to; ++i) {
    arr = arr.concat([i])
  }
  return arr
}

function flatten(arrOfArr) {
  return arrOfArr.reduce((flatArr, el) => 
    flatArry = Array.isArray(el)
      ? flatArry.concat(flatten(el))
      : flatArry.concat([el])
  , [])
}

function renderKeyPegHoles(props) {
  return (
    <div className={props.css.keys}>
      {range(props.keys.blacks).map(i => <KeyHole color="black" key={i} />)}
      {range(props.keys.whites).map(i => <KeyHole color="white" key={i} />)}
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

Row.defaultProps = {
  guess: gameInitialState.guess 
}

export default styleable(css)(Row)
