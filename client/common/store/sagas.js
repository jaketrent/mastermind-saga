import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'

import * as guessActions from '../../guess/actions'
import * as guessSagas from '../../guess/sagas'

export default function* root() {
  yield* [
    fork(takeEvery, guessActions.TYPES.CREATE, guessSagas.create)
  ]
}
