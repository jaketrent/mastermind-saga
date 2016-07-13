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

  const gen = subject.create({ id, guess })

  t.deepEqual(gen.next().value, call(request, formatUrl(id), serialize(guess)))
  t.deepEqual(gen.next(res).value, put(actions.createSuccess(guess, deserializeSuccess(res))))
  t.truthy(gen.next().done)
})

test('#create handles request error', t => {
  const res = { status: 400, data: { errors: [{ id: 'anId', title: 'response' }] } }

  const gen = subject.create({ id, guess })

  t.deepEqual(gen.next().value, call(request, formatUrl(id), serialize(guess)))
  t.deepEqual(gen.throw(res).value, put(actions.createError(deserializeError(res))))
  t.truthy(gen.next().done)
})

test('#create handles thrown error', t => {
  const err = new Error('some error')

  const gen = subject.create({ id, guess })

  t.deepEqual(gen.next().value, call(request, formatUrl(id), serialize(guess)))
  t.throws(_ => gen.throw(err))
  t.truthy(gen.next().done)
})
