import { connect } from 'react-redux'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import * as gameActions from '../game/actions'

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
                onClick={this.props.handleClick}>Guess</button> 
      </div>
    )
  }
}

export default styleable(css)(connect(null, mapDispatchToProps)(Guesser))
