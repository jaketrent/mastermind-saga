import { call, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as alertsActions from '../alerts/actions'
import * as api from './api'

export function* create({ id, guess }) {
  const { deserializeError, deserializeSuccess, formatUrl, request, serialize } = api.create
  try {
    const res = yield call(request, formatUrl(id), serialize(guess))
    yield put(actions.createSuccess(deserializeSuccess(res)))
  } catch (res) {
    if (res instanceof Error) throw res

    yield put(alertsActions.alert(deserializeError(res)))
  }
}
