import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import * as holeActions from '../hole/actions'
import Hole from '../hole'
import Peg from '../peg'

function mapDispatchToProps(dispatch) {
  return {
    holeOnClick(i) {
      dispatch(holeActions.placePeg(i))
    }
  }
}

function mapStateToProps(state) {
  return {
    guess: state.game.guess
  }
}

function renderHole(props, color, i) {
  return <Hole color={color}
               key={i}
               onClick={_ => props.holeOnClick(i)} />
}

function renderHoles(props) {
  return props.guess.map((color, i) => renderHole(props, color, i))
}

class ActiveRow extends React.Component {
  render() {
    return (
      <div className={this.props.css.root}>
        {renderHoles(this.props)}
      </div>
    )
  }
}

export default styleable(css)(connect(mapStateToProps, mapDispatchToProps)(ActiveRow))
