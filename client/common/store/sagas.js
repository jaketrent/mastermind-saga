import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'

import * as gameActions from '../../game/actions'
import * as gameSagas from '../../game/sagas'
import * as guessActions from '../../guess/actions'
import * as guessSagas from '../../guess/sagas'

export default function* root() {
  yield* [
    fork(takeEvery, gameActions.TYPES.CREATE, gameSagas.create),
    fork(takeEvery, guessActions.TYPES.CREATE, guessSagas.create)
  ]
}
