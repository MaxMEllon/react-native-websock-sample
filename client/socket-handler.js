// @flow

import type { Socket } from 'socket.io-client'
import type { User, Message } from './types'
import store from './stores'
import * as actions from './actions'

export default function sockerHandler(socket: Socket) {
  socket.on('user/join', (payload: User) => {
    store.dispatch(actions.storedMyInfo(payload))
  })
  socket.on('message/sync', (payload: Message) => {
    store.dispatch(actions.receiveMessage(payload))
  })
}
