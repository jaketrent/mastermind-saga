import { takeEvery } from 'redux-saga'

function watchEvery(actionType, saga) {
  return function* () {
    yield* takeEvery(actionType, saga)
  }
}

export default [
]
