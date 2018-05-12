// @flow

import { createReducer, type Reducer } from 'hard-reducer'
import { successFetchRooms, failFetchRooms } from '../actions'
import type { Room, Rooms } from '../types'

type State = {
  rooms: Array<Room> | null,
}

const initialState: State = {
  rooms: null,
}

const reducer: Reducer<State> = createReducer(initialState)
  .case(successFetchRooms, (state: State, payload: Rooms) => ({
    rooms: payload.rooms,
  }))
  .case(failFetchRooms, (state: State, payload: any) => state)

export default reducer
