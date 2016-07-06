import axios from 'axios'

function deserializeError(res) {
  return (res.data.errors || []).map(err => {
    return { ...err, status: res.status }
  })
}

export const create = {
  formatUrl() {
    return `/api/mastermind`
  },
  request(url) {
    return axios({
      method: 'post',
      url
    })
  },
  deserializeSuccess(res) {
    return res.data.data[0]
  },
  deserializeError
}
