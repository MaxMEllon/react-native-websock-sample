// @flow
/* eslint no-underscore-dangle: [0]  */

import { createReducer } from 'hard-reducer'
import type { Socket } from 'socket.io-client'
import * as actions from '../actions'
import type { Room, Rooms, Message, User } from '../types'

type SocketObj = {
  instance: Socket | null,
  eventRegistered: boolean,
}

type State = {
  rooms: Array<Room> | null,
  messages: Array<Message>,
  socket: SocketObj,
  my: User | null,
}

const initialState: State = {
  rooms: null,
  messages: [],
  socket: {
    instance: null,
    eventRegistered: false,
  },
  my: null,
}

const reducer = createReducer(initialState)
  // rooms
  .case(actions.successFetchRooms, (state: State, payload: Rooms) =>
    Object.assign({}, state, { rooms: payload.rooms }),
  )
  .case(actions.failFetchRooms, (state: State, payload: any) => state)

  // messages
  .case(actions.storedSocketInstance, (state: State, payload: SocketObj) =>
    Object.assign({}, state, payload),
  )
  .case(actions.receiveMessage, (state: State, payload: Message) => {
    const nextMessages = [...state.messages]
    nextMessages.unshift(payload)
    return Object.assign({}, state, { messages: nextMessages })
  })

  // my
  .case(actions.storedMyInfo, (state: State, payload: User) =>
    Object.assign({}, state, { my: payload }),
  )

export default reducer
