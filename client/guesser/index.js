import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import { CODE_PEG_COUNT } from '../game/vars'
import css from './index.css'
import * as gameActions from '../game/actions'

function mapStateToProps(state) {
  return {
    hasAllGuesses: state.game.guess.filter(g => g).length === CODE_PEG_COUNT
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick() {
      dispatch(gameActions.guess())
    }
  }
}

class Guesser extends React.Component {
  render() {
    return (
      <div className={this.props.css.root}>
        <button className={this.props.css.btn}
                disabled={!this.props.hasAllGuesses}
                onClick={this.props.handleClick}>Guess</button> 
      </div>
    )
  }
}

export default styleable(css)(connect(mapStateToProps, mapDispatchToProps)(Guesser))
