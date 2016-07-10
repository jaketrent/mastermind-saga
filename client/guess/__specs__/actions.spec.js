import test from 'ava'

import * as subject from '../actions'

test('#create returns payload', t => {
  const id = 'anId'
  const guess = ['some', 'guess']
  t.deepEqual(subject.create(id, guess), {
    type: subject.TYPES.CREATE,
    id,
    guess
  })
})

test('#createSuccess returns payload', t => {
  const guess = { some: 'guess' }
  const feedback = { some: 'feedback' }
  t.deepEqual(subject.createSuccess(guess, feedback), {
    type: subject.TYPES.CREATE_SUCCESS,
    guess,
    feedback
  })
})

test('#createError returns payload', t => {
  const errors = [{ some: 'errors' }]
  t.deepEqual(subject.createError(errors), {
    type: subject.TYPES.CREATE_ERROR,
    errors
  })
})