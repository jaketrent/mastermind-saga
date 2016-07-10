import { call, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as api from './api'

export function* create() {
  const { deserializeError, deserializeSuccess, formatUrl, request } = api.create
  try {
    const res = yield call(request, formatUrl())
    yield put(actions.createSuccess(deserializeSuccess(res)))
  } catch (res) {
    if (res instanceof Error) throw res

    yield put(actions.createError(deserializeError(res)))
  }
}
