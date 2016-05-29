import types from 'redux-types'

export const TYPES = types('hole',
  'PLACE_PEG'
)

export function placePeg(index) {
  return {
    type: TYPES.PLACE_PEG,
    index
  }
}
