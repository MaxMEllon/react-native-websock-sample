import store from './stores'
import * as actions from './actions'

export default function sockerHandler(socket) {
  socket.on('user/join', payload => {
    store.dispatch(actions.storedMyInfo(payload))
  })
  socket.on('message/sync', payload => {
    store.dispatch(actions.receiveMessage(payload))
  })
}
