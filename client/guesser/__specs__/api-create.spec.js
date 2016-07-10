import test from 'ava'

import { create as subject } from '../api'

test('#formatUrl returns url', t => {
  t.truthy(subject.formatUrl('anId') === '/api/mastermind/anId/guess')
})

test('#serialize preps body for request', t => {
  const guess = ['some', 'guess']
  t.deepEqual(subject.serialize(guess), { data: { guess } })
})

test('#deserializeSuccess preps response body for use', t => {
  const model = { some: 'resData' }
  const res = { data: { data: [model] } }
  t.deepEqual(subject.deserializeSuccess(res), model)
})
