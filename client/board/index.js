import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import ActiveRow from '../row/active'
import Guess from '../guess'
import Row from '../row'

import css from './index.css'

function mapStateToProps(state) {
  return {
    guesses: state.game.guesses,
    feedbacks: state.game.feedbacks
  }
}

function renderRows(props) {
  return props.guesses.map((guess, i) => {
    return <Row guess={guess} keys={props.feedbacks[i].keys} key={i} />
  })
}

class Board extends React.Component {
  render() {
    return (
      <div className={this.props.css.root}>
        {renderRows(this.props)}
        <ActiveRow />
        <Guess />
      </div>
    )
  }
}

Board.propTypes = {

}

export default styleable(css)(connect(mapStateToProps)(Board))
