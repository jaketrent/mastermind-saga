import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'

import * as gameActions from '../../game/actions'
import * as gameSagas from '../../game/sagas'
import * as guessActions from '../../guesser/actions'
import * as guessSagas from '../../guesser/sagas'

function watchEvery(actionType, saga) {
  return fork(function* () {
    yield* takeEvery(actionType, saga)
  })
}

export default function* root() {
  yield [
    watchEvery(gameActions.TYPES.CREATE, gameSagas.create),
    watchEvery(guessActions.TYPES.CREATE, guessSagas.create)
  ]
}
