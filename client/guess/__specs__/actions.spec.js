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
    feedback,
    alerts: []
  })
})

test('#createSuccess includes game over alert if solution doesnt match', t => {
  const guess = { some: 'guess' }
  const feedback = { solution: 'something' }
  const actual = subject.createSuccess(guess, feedback)
  t.truthy(actual.alerts[0].title === 'Game over :(')
})

test('#createSuccess includes game over alert if solution doesnt match', t => {
  const guess = ['the', 'solution', 'guess']
  const feedback = { solution: guess }
  const actual = subject.createSuccess(guess, feedback)
  t.truthy(actual.alerts[0].title === 'You won!')
})

test('#createError returns payload', t => {
  const errors = [{ some: 'errors' }]
  t.deepEqual(subject.createError(errors), {
    type: subject.TYPES.CREATE_ERROR,
    alerts: errors
  })
})
