import test from 'ava'

import { create as subject } from '../api'

test('#formatUrl returns url', t => {
  t.truthy(subject.formatUrl() === '/api/mastermind')
})

test('#deserializeSuccess preps response body for use', t => {
  const model = { some: 'resData' }
  const res = { data: { data: [model] } }
  t.deepEqual(subject.deserializeSuccess(res), model)
})
