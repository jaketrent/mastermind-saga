import axios from 'axios'

import { deserializeError } from '../common/api'

export const create = {
  formatUrl(id) {
    console.log('client id', id)
    return `/api/mastermind/${id}/guess`
  },
  serialize(guess) {
    return { data: { guess } } 
  },
  request(url, data) {
    return axios({
      method: 'post',
      url,
      data 
    })
  },
  deserializeSuccess(res) {
    return res.data.data[0]
  },
  deserializeError
}
