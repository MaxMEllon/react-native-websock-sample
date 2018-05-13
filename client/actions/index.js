// @flow

import { buildActionCreator, type ActionCreator } from 'hard-reducer'
import type { Rooms, Message, User } from '../types'

const createRoomAction = buildActionCreator({ prefix: 'room: ' }).createAction

export const fetchRooms: ActionCreator<null> = createRoomAction('fetch belong rooms')
export const successFetchRooms: ActionCreator<Rooms> = createRoomAction(
  'successes get rooms from server',
)
export const failFetchRooms: ActionCreator<any> = createRoomAction('failures get rooms from server')

const createMessageAction = buildActionCreator({ prefix: 'message: ' }).createAction

export const connectSocketServer: ActionCreator<null> = createMessageAction(
  'connect websocket server',
)
export const disconnectSocketServer: ActionCreator<null> = createMessageAction(
  'disconnect websocket server',
)
export const storedSocketInstance: ActionCreator<any> = createMessageAction(
  'stored socket.io client instance',
)
export const postMessage: ActionCreator<Message> = createMessageAction('post message to server')
export const receiveMessage: ActionCreator<Message> = createMessageAction(
  'receive message from server',
)

const createMyAction = buildActionCreator({ prefix: 'my: ' }).createAction

export const storedMyInfo: ActionCreator<User> = createMyAction('stored my info to reducer')
