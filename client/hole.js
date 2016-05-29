import React from 'react'
import styleable from 'react-styleable'

import css from './hole.css'
import Peg from './peg'

const { func, string } = React.PropTypes

class Hole extends React.Component {
  render() {
    return (
      <div className={this.props.css.root} onClick={this.props.onClick}>
        <Peg color={this.props.color} />
      </div>
    )
  }
}

Hole.propTypes = {
  color: string,
  onClick: func.isRequired
}

Hole.defaultProps = {
  color: 'gray'
}

export default styleable(css)(Hole)
