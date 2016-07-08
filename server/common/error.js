const uuid = require('node-uuid')

function create(title) {
  return {
    id: uuid.v4(),
    title
  }
}

exports.create = create
