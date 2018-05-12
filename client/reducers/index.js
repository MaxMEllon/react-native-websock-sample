// @flow

import { createReducer, type Reducer, type ActionCreator } from 'hard-reducer'
import {
  successFetchRooms,
  failFetchRooms,
} from '../actions'
import type { Room, Rooms } from '../types'

type State = {
  rooms: ?Array<Room>,
}

const initialState: State = {
  rooms: null,
}

const reducer = createReducer(initialState)
  .case(successFetchRooms, (state: State, payload: Rooms) => {
    return {
      rooms: payload.rooms,
    }
  })
  .case(failFetchRooms, (state: State, payload: any) => {
    alert(payload)
    return state
  })

export default reducer
