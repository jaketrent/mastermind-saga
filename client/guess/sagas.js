import { call, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as api from './api'

export function* create({ id, guess }) {
  const { deserializeError, deserializeSuccess, formatUrl, request, serialize } = api.create
  try {
    const res = yield call(request, formatUrl(id), serialize(guess))
    const feedback = deserializeSuccess(res)
    yield put(actions.createSuccess(guess, feedback))
  } catch (res) {
    if (res instanceof Error) throw res

    yield put(actions.createError(deserializeError(res)))
  }
}
