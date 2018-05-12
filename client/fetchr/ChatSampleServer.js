import axios from 'axios'

export default {
  getRooms() {
    const url = `http://localhost:4000/rooms`
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }
}
