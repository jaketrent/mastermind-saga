import test from 'ava'

import * as subject from '../api'

test('#deserializeError add status to errors', t => {
  const res = {
    status: 500,
    data: {
      errors: [
        { first: 'err' }, 
        { second: 'err' }
      ] 
    } 
  }
  const expected = [
    { first: 'err', status: 500 },
    { second: 'err', status: 500 }
  ]
  t.deepEqual(subject.deserializeError(res), expected)
})
