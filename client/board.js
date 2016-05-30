import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import ActiveRow from './row/active'
import Row from './row'

import css from './board.css'

function mapStateToProps(state) {
  return {
    guesses: state.game.guesses
  }
}

function renderRows(props) {
  return props.guesses.map((guess, i) => {
    return <Row guess={guess} key={i} />
  })
}

class Board extends React.Component {
  render() {
    return (
      <div className={this.props.css.root}>
        {renderRows(this.props)}
        <ActiveRow />
      </div>
    )
  }
}

Board.propTypes = {

}

export default styleable(css)(connect(mapStateToProps)(Board))
