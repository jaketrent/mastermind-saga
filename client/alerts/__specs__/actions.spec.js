import test from 'ava'

import * as subject from '../actions'

test('#alert returns payload', t => {
  const alerts = [{ some: 'alerts' }]
  t.deepEqual(subject.alert(alerts), {
    type: subject.TYPES.APPEND_ALERTS,
    alerts
  })
})

test('#dismissError returns payload', t => {
  const id = 'someId'
  t.deepEqual(subject.dismissAlert(id), {
    type: subject.TYPES.DISMISS_ALERT,
    id
  })
})
