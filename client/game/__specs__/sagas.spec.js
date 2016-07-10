import { call, put } from 'redux-saga/effects'
import test from 'ava'

import * as actions from '../actions'
import * as api from '../api'
import * as subject from '../sagas'

const { deserializeError, deserializeSuccess, formatUrl, request } = api.create

test('#create handles a request success', t => {
  const res = { status: 200, data: { data: { some: 'response' } } }

  const iterator = subject.create()

  t.deepEqual(iterator.next().value, call(request, formatUrl()))
  t.deepEqual(iterator.next(res).value, put(actions.createSuccess(deserializeSuccess(res))))
})

test('#create handles a request error', t => {
  const res = { status: 500, data: { errors: [{ some: 'error' }] } }

  const iterator = subject.create()

  t.deepEqual(iterator.next().value, call(request, formatUrl()))
  t.deepEqual(iterator.throw(res).value, put(actions.createError(deserializeError(res))))
})

test('#create handles thrown error', t => {
  const err = new Error('some error')

  const iterator = subject.create()

  t.deepEqual(iterator.next().value, call(request, formatUrl()))
  t.throws(_ => iterator.next())
})
