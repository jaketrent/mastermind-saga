import test from 'ava'

import * as subject from '../actions'

test('#create returns payload', t => {
  t.deepEqual(subject.create(), {
    type: subject.TYPES.CREATE
  })
})

test('#createSuccess returns payload', t => {
  const game = { some: 'game' }
  t.deepEqual(subject.createSuccess(game), {
    type: subject.TYPES.CREATE_SUCCESS,
    game
  })
})

test('#createError returns payload', t => {
  const errors = [{ some: 'errors' }]
  t.deepEqual(subject.createError(errors), {
    type: subject.TYPES.CREATE_ERROR,
    errors
  })
})

