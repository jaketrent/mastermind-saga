import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'

import * as gameActions from '../../game/actions'
import * as gameSagas from '../../game/sagas'

function watchEvery(actionType, saga) {
  return fork(function* () {
    yield* takeEvery(actionType, saga)
  })
}

export default function* root() {
  yield [
    watchEvery(gameActions.TYPES.CREATE, gameSagas.create)
  ]
}
