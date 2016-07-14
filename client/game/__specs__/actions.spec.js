import td from 'testdouble'
import test from 'ava'

import * as api from '../api'
import * as subject from '../actions'

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

test('#create requests game and handles success', t => {
  const dispatch = td.function('dispatch') 
  const game = { some: 'game' }
  const res = { data: { data: [game] } }
  const reqPromise = new Promise(resolve => resolve(res))
  td.replace(api.create, 'request', () => reqPromise)

  subject.create()(dispatch)

  return reqPromise.then(_ => {
    td.verify(dispatch(subject.createSuccess(game)))
  })
})

test('#create requests game and handles error', t => {
  const dispatch = td.function('dispatch') 
  const errors = [{ some: 'errors' }]
  const status = 400
  const res = { status, data: { errors } }
  const reqPromise = new Promise((_, reject) => reject(res))
  td.replace(api.create, 'request', () => reqPromise)

  subject.create()(dispatch)

  return reqPromise.catch(_ => {
    td.verify(dispatch(subject.createError([{ ...errors[0], status }])))
  })
})
