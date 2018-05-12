// @flow

import axios from 'axios'
import type { Rooms } from '../types'

// FIXME: this variable should be desided by environment
const baseURL = 'http://localhost:4000'

export default {
  getRooms(): Promise<Rooms> {
    const url = `${baseURL}/rooms`
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  },
}
