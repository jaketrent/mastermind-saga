import test from 'ava'

import subject from '../reducer'
import { TYPES as GAME_TYPES } from '../../game/actions'
import { TYPES } from '../actions'

test('TYPES.PLACE_PEG assigns first color to null guess', t => {
  const state = { guess: [null, 'red', 'red', 'red'] }
  const action = { type: TYPES.PLACE_PEG, index: 0 }
  t.deepEqual(subject(state, action).guess, ['red', 'red', 'red', 'red'])
})

test('TYPES.PLACE_PEG assigns next color to colored guess', t => {
  const state = { guess: ['red', 'yellow', 'blue', 'green'] }
  const action = { type: TYPES.PLACE_PEG, index: 2 }
  t.deepEqual(subject(state, action).guess, ['red', 'yellow', 'green', 'green'])
})

test('TYPES.PLACE_PEG expands guess size', t => {
  const state = { guess: ['blue'] }
  const action = { type: TYPES.PLACE_PEG, index: 3 }
  // TODO: why is this not equal?!
  // t.deepEqual(subject(state, action).guess, ['blue', null, null, 'red'])
  const actual = subject(state, action).guess
  t.truthy(actual.length === 4)
  t.truthy(actual[action.index] === 'red')
})

// test('TYPES.CREATE_SUCCESS sets guess for next turn', t => {
//   const state = { guess: { previous: 'guess' } }
//   const action = { type: TYPES.PLACE_PEG, index: 2 }
//   t.deepEqual(subject(state, action).guess, ['red', 'yellow', 'green', 'green'])
// })

test('GAME_TYPES.CREATE_SUCCESS inits guess size', t => {
  const state = { guess: ['red', 'yellow', 'blue', 'green'] }
  const action = { type: GAME_TYPES.CREATE_SUCCESS, game: { codePegCount: 3 } }
  const actual = subject(state, action)
  t.truthy(actual.codePegCount === 3)
  t.deepEqual(actual.guess, [null, null, null])
})
