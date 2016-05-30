import types from 'redux-types'

export const TYPES = types('game',
  'GUESS'
)

export function guess() {
  return { type: TYPES.GUESS }
}
