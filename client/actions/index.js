// @flow

import { buildActionCreator, type ActionCreator } from 'hard-reducer'
import type { Rooms, Message, User } from '../types'

const createRoomAction = buildActionCreator({ prefix: 'room: ' }).createAction

export const fetchRooms: ActionCreator<null> = createRoomAction('fetch belong rooms')
export const successFetchRooms: ActionCreator<Rooms> = createRoomAction(
  'succeed to get rooms from server',
)
export const failFetchRooms: ActionCreator<any> = createRoomAction(
  'failure to get rooms from server',
)

const createMessageAction = buildActionCreator({ prefix: 'message: ' }).createAction

export const connectSocketServer: ActionCreator<null> = createMessageAction(
  'connect websocket server',
)
export const disconnectSocketServer: ActionCreator<null> = createMessageAction(
  'disconnect websocket server',
)
export const storedSocketInstance: ActionCreator<any> = createMessageAction(
  'stored web socket instance to reducer',
)
export const postMessage: ActionCreator<Message> = createMessageAction(
  'post message to server by web spcket',
)
export const receiveMessage: ActionCreator<Message> = createMessageAction(
  'receive message from server',
)

const createMyAction = buildActionCreator({ prefix: 'my: ' }).createAction

export const storedMyInfo: ActionCreator<User> = createMyAction('stored my user info to reducer')
