import axios from 'axios'

import { deserializeError } from '../common/api'

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
