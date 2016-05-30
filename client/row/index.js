import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import Hole from '../hole'

const { arrayOf, string } = React.PropTypes

function renderHole(color, i) {
  return <Hole color={color} key={i} />
}

function renderHoles(props) {
  return props.guess.map(renderHole)
}

class Row extends React.Component {
  render() {
    return (
      <div className={this.props.css.root}>
        {renderHoles(this.props)}
      </div>
    )
  }
}

Row.propTypes = {
  guess: arrayOf(string)
}

Row.defaultProps = {
  guess: [null, null, null, null]
}

export default styleable(css)(Row)
