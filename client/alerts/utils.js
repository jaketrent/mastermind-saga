const uuid = require('node-uuid')

export function create(title) {
  return {
    id: uuid.v4(),
    title
  }
}
