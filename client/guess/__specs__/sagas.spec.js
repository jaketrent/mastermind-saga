import { call, put } from 'redux-saga/effects'
import test from 'ava'

import * as actions from '../actions'
import * as api from '../api'
import * as subject from '../sagas'

const id = 'anId'
const guess = ['some', 'guess']
const { deserializeError, deserializeSuccess, formatUrl, request, serialize } = api.create

test('#create handles request success', t => {
  const res = { status: 201, data: { data: [{ some: 'response' }] } }

  const iterator = subject.create({ id, guess })

  t.deepEqual(iterator.next().value, call(request, formatUrl(id), serialize(guess)))
  t.deepEqual(iterator.next(res).value, put(actions.createSuccess(guess, deserializeSuccess(res))))
})

test('#create handles request error', t => {
  const res = { status: 400, data: { errors: [{ id: 'anId', title: 'response' }] } }

  const iterator = subject.create({ id, guess })

  t.deepEqual(iterator.next().value, call(request, formatUrl(id), serialize(guess)))
  t.deepEqual(iterator.throw(res).value, put(actions.createError(deserializeError(res))))
})

test('#create handles thrown error', t => {
  const err = new Error('some error')

  const iterator = subject.create({ id, guess })

  t.deepEqual(iterator.next().value, call(request, formatUrl(id), serialize(guess)))
  t.throws(_ => iterator.throw(err))
})
