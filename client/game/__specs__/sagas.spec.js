import { call, put } from 'redux-saga/effects'
import test from 'ava'

import * as actions from '../actions'
import * as api from '../api'
import * as subject from '../sagas'

const { deserializeError, deserializeSuccess, formatUrl, request } = api.create

test('#create handles a request success', t => {
  const res = { status: 200, data: { data: { some: 'response' } } }

  const gen = subject.create()

  t.deepEqual(gen.next().value, call(request, formatUrl()))
  t.deepEqual(gen.next(res).value, put(actions.createSuccess(deserializeSuccess(res))))
  t.truthy(gen.next().done)
})

test('#create handles a request error', t => {
  const res = { status: 500, data: { errors: [{ some: 'error' }] } }

  const gen = subject.create()

  t.deepEqual(gen.next().value, call(request, formatUrl()))
  t.deepEqual(gen.throw(res).value, put(actions.createError(deserializeError(res))))
  t.truthy(gen.next().done)
})

test('#create handles thrown error', t => {
  const err = new Error('some error')

  const gen = subject.create()

  t.deepEqual(gen.next().value, call(request, formatUrl()))
  t.throws(_ => gen.next())
  t.truthy(gen.next().done)
})
