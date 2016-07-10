import test from 'ava'

import * as subject from '../rules'

test('#calcKeys has no whites, no blacks if no matching colors', t => {
  const solution = ['red', 'red', 'red', 'red']
  const guess = ['orange', 'orange', 'orange', 'orange']
  t.deepEqual(subject.calcKeys(guess, solution), { whites: 0, blacks: 0 })
})

test('#calcKeys has all blacks if all correct positions', t => {
  const solution = ['red', 'yellow', 'blue', 'green']
  const guess = ['red', 'yellow', 'blue', 'green']
  t.deepEqual(subject.calcKeys(guess, solution), { whites: 0, blacks: 4 })
})

test('#calcKeys has all whites if no correct positions', t => {
  const solution = ['red', 'yellow', 'blue', 'green']
  const guess = ['green', 'blue', 'yellow', 'red']
  t.deepEqual(subject.calcKeys(guess, solution), { whites: 4, blacks: 0 })
})

test('#calcKeys has split whites and blacks', t => {
  const solution = ['red', 'yellow', 'red', 'yellow']
  const guess = ['red', 'yellow', 'yellow', 'red']
  t.deepEqual(subject.calcKeys(guess, solution), { whites: 2, blacks: 2 })
})

test('#calcKeys handles blacks and repeat color whites', t => {
  const solution = ['red', 'yellow', 'blue', 'green']
  const guess = ['red', 'blue', 'yellow', 'red']
  t.deepEqual(subject.calcKeys(guess, solution), { whites: 2, blacks: 1 })
})
