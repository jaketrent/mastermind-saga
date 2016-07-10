import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import { CODE_PEG_COUNT } from '../game/vars'
import css from './index.css'
import * as guessActions from './actions'

function mapStateToProps(state) {
  return {
    gameId: state.game.id,
    guess: state.guess.guess,
    hasAllGuesses: state.guess.guess.filter(g => g).length === CODE_PEG_COUNT
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick(id, guess) {
      dispatch(guessActions.create(id, guess))
    }
  }
}

class Guess extends React.Component {
  render() {
    return (
      <div className={this.props.css.root}>
        <button className={this.props.css.btn}
                disabled={!this.props.hasAllGuesses}
                onClick={_ => this.props.handleClick(this.props.gameId, this.props.guess)}>Guess</button> 
      </div>
    )
  }
}

export default styleable(css)(connect(mapStateToProps, mapDispatchToProps)(Guess))
