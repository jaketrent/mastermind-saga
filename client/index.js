import React from 'react'
import { render } from 'react-dom'

function Comp() {
  return (
    <h1>Awesome</h1>
  )
}

render(<Comp />, document.getElementById('app'))
