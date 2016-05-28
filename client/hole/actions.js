import types from 'redux-types'

const TYPES = types('hole',
  'PLACE_PEG'
)

export function placePeg() {
  return {
    type: TYPES.PLACE_PEG_
  }
}
