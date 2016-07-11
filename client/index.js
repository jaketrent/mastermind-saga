import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'

import Game from './game'
import * as gameActions from './game/actions'
import store from './common/store'

store.dispatch(gameActions.create())

render(
  <Provider store={store}>
    <Game />
  </Provider>
, document.getElementById('app'))
