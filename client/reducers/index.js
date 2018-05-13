// @flow

import { createReducer, type Reducer } from 'hard-reducer'
import * as actions from '../actions'
import type { Room, Rooms, Message, User } from '../types'

type Socket = {
  instance: any,
}

type State = {
  rooms: Array<Room> | null,
  messages: Array<Message>,
  socket: Socket,
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

const reducer: Reducer<State> = createReducer(initialState)
  // rooms
  .case(actions.successFetchRooms, (state: State, payload: Rooms) =>
    Object.assign({}, state, { rooms: payload.rooms }),
  )
  .case(actions.failFetchRooms, (state: State, payload: any) => state)

  // messages
  .case(actions.storedSocketInstance, (state: State, payload: Socket) =>
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
